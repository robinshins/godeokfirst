import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

export async function POST(request: NextRequest) {
  try {
    const supabase = createClient(supabaseUrl, supabaseServiceKey);
    const data = await request.json();

    // Calculate age from resident number
    const calculateAge = (residentNumber: string): number => {
      if (!residentNumber || residentNumber.length < 7) return 0;

      const birthYear = parseInt(residentNumber.substring(0, 2));
      const genderDigit = parseInt(residentNumber.charAt(7));

      let fullYear = 0;
      if (genderDigit === 1 || genderDigit === 2) {
        fullYear = 1900 + birthYear;
      } else if (genderDigit === 3 || genderDigit === 4) {
        fullYear = 2000 + birthYear;
      }

      const currentYear = new Date().getFullYear();
      return currentYear - fullYear;
    };

    const patientIntakeData = {
      name: data.name,
      gender: data.gender,
      resident_number: data.residentNumber || null,
      passport_number: data.passportNumber || null,
      birthdate: data.birthdate || null,
      age: data.age || calculateAge(data.residentNumber),
      address: data.address,
      phone_number: data.phoneNumber,
      guardian_phone_number: data.guardianPhoneNumber || null,

      // 내원경로
      how_did_you_know: data.howDidYouKnow,
      how_did_you_know_other: data.howDidYouKnowOther || null,
      how_did_you_know_search: data.howDidYouKnowSearch || null,
      how_did_you_know_partner: data.howDidYouKnowPartner || null,
      referrer_name: data.referrerName || null,
      why_visit: data.whyVisit,
      why_visit_other: data.whyVisitOther || null,

      // 상담과목
      consultation_types: data.consultationTypes,
      other_consultation: data.otherConsultation || null,
      last_dental_visit: data.lastDentalVisit,

      // 건강정보
      drug_allergy: data.drugAllergy,
      drug_allergy_details: data.drugAllergyDetails || null,
      medical_conditions: data.medicalConditions,
      other_condition: data.otherCondition || null,
      has_dental_history: data.hasDentalHistory,
      dental_history_details: data.dentalHistoryDetails || null,

      // 흡연/음주
      smoking_amount: data.smokingAmount || null,
      drinking_frequency: data.drinkingFrequency || null,
      no_smoking_drinking: data.noSmokingDrinking,

      // 보험
      has_dental_insurance: data.hasDentalInsurance,
      insurance_company: data.insuranceCompany || null,
      insurance_year: data.insuranceYear || null,

      // 증상
      symptoms: data.symptoms,
      pain_level: data.painLevel,

      // 동의
      privacy_consent: data.privacyConsent,
      consent_date: new Date().toISOString(),
      signature: data.signature,

      // 법정대리인 (만 14세 미만)
      guardian_name: data.guardianName || null,
      guardian_relationship: data.guardianRelationship || null,
      guardian_signature: data.guardianSignature || null,
    };

    const { data: insertedData, error } = await supabase
      .from('patient_intake')
      .insert([patientIntakeData])
      .select();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Failed to save patient intake data', details: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data: insertedData }, { status: 200 });
  } catch (error) {
    console.error('Error in patient intake API:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const { data, error } = await supabase
      .from('patient_intake')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Failed to fetch patient intake data', details: error.message },
        { status: 500 }
      );
    }

    // Fetch consultation logs for phone number matching
    const { data: consultationLogs, error: consultationError } = await supabase
      .from('consultation_logs')
      .select('*')
      .order('created_at', { ascending: false });

    if (consultationError) {
      console.error('Consultation logs error:', consultationError);
    }

    // Convert snake_case to camelCase and match with consultation logs
    const formattedData = data?.map((item: Record<string, unknown>) => {
      // Normalize phone number (remove all non-digit characters)
      const normalizedPhone = (item.phone_number as string)?.replace(/\D/g, '');

      // Find matching consultation logs by phone number
      const matchingConsultations = consultationLogs?.filter((log: Record<string, unknown>) => {
        const logPhone = (log.phone as string)?.replace(/\D/g, '');
        return logPhone === normalizedPhone;
      }) || [];

      return {
        id: item.id,
        created_at: item.created_at,
        updated_at: item.updated_at,
        memo: item.memo,
        name: item.name,
        gender: item.gender,
        residentNumber: item.resident_number,
        passportNumber: item.passport_number,
        birthdate: item.birthdate,
        age: item.age,
        address: item.address,
        phoneNumber: item.phone_number,
        guardianPhoneNumber: item.guardian_phone_number,
        howDidYouKnow: item.how_did_you_know,
        howDidYouKnowOther: item.how_did_you_know_other,
        howDidYouKnowSearch: item.how_did_you_know_search,
        howDidYouKnowPartner: item.how_did_you_know_partner,
        referrerName: item.referrer_name,
        whyVisit: item.why_visit,
        whyVisitOther: item.why_visit_other,
        consultationTypes: item.consultation_types,
        otherConsultation: item.other_consultation,
        lastDentalVisit: item.last_dental_visit,
        drugAllergy: item.drug_allergy,
        drugAllergyDetails: item.drug_allergy_details,
        medicalConditions: item.medical_conditions,
        otherCondition: item.other_condition,
        hasDentalHistory: item.has_dental_history,
        dentalHistoryDetails: item.dental_history_details,
        smokingAmount: item.smoking_amount,
        drinkingFrequency: item.drinking_frequency,
        noSmokingDrinking: item.no_smoking_drinking,
        hasDentalInsurance: item.has_dental_insurance,
        insuranceCompany: item.insurance_company,
        insuranceYear: item.insurance_year,
        symptoms: item.symptoms,
        painLevel: item.pain_level,
        privacyConsent: item.privacy_consent,
        consentDate: item.consent_date,
        signature: item.signature,
        guardianName: item.guardian_name,
        guardianRelationship: item.guardian_relationship,
        guardianSignature: item.guardian_signature,
        // Chat consultation data
        hasChatConsultation: matchingConsultations.length > 0,
        chatConsultations: matchingConsultations.map((log: Record<string, unknown>) => ({
          id: log.id,
          createdAt: log.created_at,
          consultationContent: log.consultation_content,
          chatHistory: log.chat_history,
          status: log.status,
          referrerSource: log.referrer_source,
        })),
      };
    });

    return NextResponse.json({ success: true, data: formattedData }, { status: 200 });
  } catch (error) {
    console.error('Error in patient intake API:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
