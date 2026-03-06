#!/bin/bash
# Script to rename Korean files to English and update code references

cd "$(dirname "$0")/.."

# Create mapping file for code replacement
cat > scripts/path-mapping.txt << 'MAPPING'
# Icons
/icons/부산남구1등.svg|/icons/busan-namgu-no1.svg
/icons/와인.svg|/icons/wine.svg
/icons/커피.svg|/icons/coffee.svg
/icons/흡연.svg|/icons/smoking.svg
/icons/Arrow - Right.svg|/icons/arrow-right.svg

# Videos
/videos/메디스치과.mp4|/videos/medis-dental.mp4
/videos/밀링머신.mp4|/videos/milling-machine.mp4
/videos/디지털라미네이트 3d 영상.mp4|/videos/digital-laminate-3d.mp4
/videos/라미네이트 끼우는 영상.mp4|/videos/laminate-fitting.mp4
/videos/라미네이트 후 웃는 영상.mp4|/videos/laminate-smile.mp4
/videos/라미네이트 후 웃는 영상2.mp4|/videos/laminate-smile2.mp4
/videos/3d프린터.mp4|/videos/3d-printer.mp4

# Interview videos
/interview_videos/김순희님 (12월 학술)_ 얼굴동의미동의_목소리만.mp4|/interview_videos/interview-patient1-voice-only.mp4
/interview_videos/민선옥님 (12월 학술)_초상권얼굴동의.mp4|/interview_videos/interview-patient2-face-consent.mp4
/interview_videos/박은옥님_구강사진동의_얼굴블러링처리동의.mp4|/interview_videos/interview-patient3-blurred.mp4

# Images - Root level
/images/og이미지.png|/images/og-image.png
/images/건물외관.png|/images/building-exterior.png
/images/경성대학교.png|/images/kyungsung-univ.png
/images/공식지정병원.png|/images/official-hospital.png
/images/동국씨엠.jpg|/images/dongguk-cm.jpg
/images/동명대학교.svg|/images/dongmyung-univ.svg
/images/메가젠vip1.jpg|/images/megagen-vip1.jpg
/images/메가젠vip2.jpg|/images/megagen-vip2.jpg
/images/메가젠임플란트인증패.jpg|/images/megagen-implant-certificate.jpg
/images/미백비포애프터.png|/images/whitening-before-after-main.png
/images/미백전.jpg|/images/whitening-before.jpg
/images/미백후.jpg|/images/whitening-after.jpg
/images/미세현미경.jpg|/images/microscope.jpg
/images/미세현미경.png|/images/microscope.png
/images/미세현미경_신경관확보.webp|/images/microscope-nerve-canal.webp
/images/미세현미경_치아뿌리염증원인발견.webp|/images/microscope-root-inflammation.webp
/images/미세현미경_크랙발견.webp|/images/microscope-crack-found.webp
/images/미세현미경진료사진.jpg|/images/microscope-treatment-photo.jpg
/images/박테리아테라피.jpg|/images/bacteria-therapy-main.jpg
/images/배인혜원장.png|/images/dr-bae-inhye.png
/images/부경대학교.png|/images/pukyong-univ.png
/images/부산대병원.svg|/images/busan-univ-hospital.svg
/images/부산세미나.png|/images/busan-seminar.png
/images/뷰티스라이트기기.jpg|/images/beautis-light-device.jpg
/images/뷰티스미백제.png|/images/beautis-whitening-agent.png
/images/비급여항목.png|/images/non-covered-items.png
/images/사랑니.jpg|/images/wisdom-tooth.jpg
/images/세미나진행사진1.JPG|/images/seminar-photo1.JPG
/images/세미나진행사진2.JPG|/images/seminar-photo2.JPG
/images/세미나진행사진3.JPG|/images/seminar-photo3.JPG
/images/세척실1.webp|/images/sterilization-room1.webp
/images/세척실2.webp|/images/sterilization-room2.webp
/images/심미치과펠로우.jpg|/images/cosmetic-dentistry-fellow.jpg
/images/오스템1.jpg|/images/osstem1.jpg
/images/오스템2.jpg|/images/osstem2.jpg
/images/워터픽.jpeg|/images/waterpik.jpeg
/images/원내기공소1.jpg|/images/in-house-lab1.jpg
/images/원내기공소2.jpg|/images/in-house-lab2.jpg
/images/유익균.jpg|/images/beneficial-bacteria.jpg
/images/의료진소개.png|/images/medical-staff-intro.png
/images/인테리어_개인치료실.webp|/images/interior-private-room.webp
/images/인테리어_대기실.webp|/images/interior-waiting-room.webp
/images/인테리어_로비.webp|/images/interior-lobby.webp
/images/인테리어_멸균실.webp|/images/interior-sterilization.webp
/images/인테리어_상담실.webp|/images/interior-consultation.webp
/images/인테리어_치료실.webp|/images/interior-treatment-room.webp
/images/임플란트보증제.png|/images/implant-warranty.png
/images/임플란트스플린트.webp|/images/implant-splint.webp
/images/임플란트아이콘.png|/images/implant-icon.png
/images/임플란트전후사진1.png|/images/implant-before-after1.png
/images/임플란트전후사진2.png|/images/implant-before-after2.png
/images/임플란트전후사진3.png|/images/implant-before-after3.png
/images/임플란트전후사진4.png|/images/implant-before-after4.png
/images/임플란트전후사진5.png|/images/implant-before-after5.png
/images/임플란트전후사진6.png|/images/implant-before-after6.png
/images/전체임플란트전후1.png|/images/full-implant-before-after1.png
/images/전체임플란트전후2.png|/images/full-implant-before-after2.png
/images/전체임플란트전후3.png|/images/full-implant-before-after3.png
/images/전체임플란트전후4(엑스레이사진).png|/images/full-implant-before-after4-xray.png
/images/전체임플란트전후5.png|/images/full-implant-before-after5.png
/images/주차장.jpg|/images/parking.jpg
/images/지도스크린샷.png|/images/map-screenshot.png
/images/지정협력병원.jpg|/images/designated-partner-hospital.jpg
/images/지하주차장.jpg|/images/underground-parking.jpg
/images/최다식립병원.jpg|/images/most-implant-hospital.jpg
/images/큐레이.png|/images/qray.png
/images/큐레이사진.png|/images/qray-photo.png
/images/큐레이사진2.jpg|/images/qray-photo2.jpg
/images/페리오클린2.jpg|/images/perioclean2.jpg
/images/평생안심 임플란트 보증제.png|/images/lifetime-implant-warranty.png
/images/평생안심 임플란트 보증제.svg|/images/lifetime-implant-warranty.svg
/images/하이니스자문.png|/images/hyness-advisor.png
/images/하이니스자문위원.svg|/images/hyness-advisory-board.svg
/images/동판6개.jpg|/images/bronze-plaques-6.jpg
/images/김동석원장.jpg|/images/dr-kim-dongseok.jpg
/images/모니터링장비.jpg|/images/monitoring-equipment.jpg
/images/무통.png|/images/painless.png
/images/무통2.png|/images/painless2.png
/images/의식하진정요법.png|/images/sedation-therapy.png
/images/의식하진정요법_치과전문소생술.png|/images/sedation-dental-cpr.png
/images/의식하진정요법자격증_해외.png|/images/sedation-certificate-overseas.png
/images/디지털원내기공소.jpg|/images/digital-in-house-lab.jpg
/images/디지털임플란트절개안함.png|/images/digital-implant-no-incision.png
/images/기존임플란트와차이점_절개안함.png|/images/implant-difference-no-incision.png
/images/모바일_디지털임플란트.png|/images/mobile-digital-implant.png
/images/모바일임플란트장점.png|/images/mobile-implant-benefits.png
/images/3d디지털임플란트.png|/images/3d-digital-implant.png
/images/heri방식_시멘트방식과차이점.png|/images/heri-vs-cement-method.png
/images/h2o2반응.png|/images/h2o2-reaction.png
/images/크라운사진.png|/images/crown-photo.png
/images/각종인증패.jpg|/images/various-certifications.jpg

# Popup images
/images/popup/10월진료일정.png|/images/popup/october-schedule.png
/images/popup/가상임플란트팝업.jpg|/images/popup/virtual-implant-popup.jpg
/images/popup/전체임플란트팝업.jpg|/images/popup/full-implant-popup.jpg

# Seminar folder
/images/세미나/디지털보철강의.jpg|/images/seminar/digital-prosthetics-lecture.jpg
/images/세미나/메가젠디지털스캔세미나.jpg|/images/seminar/megagen-digital-scan-seminar.jpg
/images/세미나/오스템디지털가이드수술강의.jpg|/images/seminar/osstem-digital-guide-surgery-lecture.jpg

# Whitening before/after folder
/images/미백전후/술전.jpg|/images/whitening-before-after/pre-treatment.jpg
/images/미백전후/술전2.jpg|/images/whitening-before-after/pre-treatment2.jpg
/images/미백전후/술후.jpg|/images/whitening-before-after/post-treatment.jpg
/images/미백전후/술후2.jpg|/images/whitening-before-after/post-treatment2.jpg

# Laminate before/after folder
/images/라미네이트전후/권예서_20240312_120225.jpg|/images/laminate-before-after/case1-before.jpg
/images/라미네이트전후/권예서_20240401_122143.jpg|/images/laminate-before-after/case1-after.jpg
/images/라미네이트전후/김민경E_20240813_121422.jpg|/images/laminate-before-after/case2-before.jpg
/images/라미네이트전후/김민경E_20240920_171243.jpg|/images/laminate-before-after/case2-after.jpg
/images/라미네이트전후/김민경E_20240909_125420.jpg|/images/laminate-before-after/case3-before.jpg
/images/라미네이트전후/김민경E_20240920_171650.jpg|/images/laminate-before-after/case3-after.jpg
/images/라미네이트전후/김병석_20230701_101104.jpg|/images/laminate-before-after/case4-before.jpg
/images/라미네이트전후/김병석_20230715_115131.jpg|/images/laminate-before-after/case4-after.jpg
/images/라미네이트전후/김선형_20230512_164104.jpg|/images/laminate-before-after/case5-before.jpg
/images/라미네이트전후/김선형_20230513_141310.jpg|/images/laminate-before-after/case5-after.jpg
/images/라미네이트전후/조성애_20240130_150816.jpg|/images/laminate-before-after/case6-before.jpg
/images/라미네이트전후/조성애_20240227_145713.jpg|/images/laminate-before-after/case6-after.jpg

# X-ray images
/images/엑스레이_임플란트전1.jpg|/images/xray-implant-before1.jpg
/images/엑스레이_임플란트전2.jpg|/images/xray-implant-before2.jpg
/images/엑스레이_임플란트전3.jpg|/images/xray-implant-before3.jpg
/images/엑스레이_임플란트전4.jpg|/images/xray-implant-before4.jpg
/images/엑스레이_임플란트후1.jpg|/images/xray-implant-after1.jpg
/images/엑스레이_임플란트후2.jpg|/images/xray-implant-after2.jpg
/images/엑스레이_임플란트후3.jpg|/images/xray-implant-after3.jpg
/images/엑스레이_임플란트후4.jpg|/images/xray-implant-after4.jpg
/images/엑스레이_전체임플란트전1.jpg|/images/xray-full-implant-before1.jpg
/images/엑스레이_전체임플란트전2.jpg|/images/xray-full-implant-before2.jpg
/images/엑스레이_전체임플란트전3.jpg|/images/xray-full-implant-before3.jpg
/images/엑스레이_전체임플란트전4.jpg|/images/xray-full-implant-before4.jpg
/images/엑스레이_전체임플란트후1.jpg|/images/xray-full-implant-after1.jpg
/images/엑스레이_전체임플란트후2.jpg|/images/xray-full-implant-after2.jpg
/images/엑스레이_전체임플란트후3.jpg|/images/xray-full-implant-after3.jpg
/images/엑스레이_전체임플란트후4.jpg|/images/xray-full-implant-after4.jpg

# Digital implant before/after folder
/images/디지털임플란트전후/전체임플란트_얼굴사진_전1.jpg|/images/digital-implant-before-after/full-implant-face-before1.jpg
/images/디지털임플란트전후/전체임플란트_얼굴사진_전2.jpg|/images/digital-implant-before-after/full-implant-face-before2.jpg
/images/디지털임플란트전후/전체임플란트_얼굴사진_전3.jpg|/images/digital-implant-before-after/full-implant-face-before3.jpg
/images/디지털임플란트전후/전체임플란트_얼굴사진_전4.jpg|/images/digital-implant-before-after/full-implant-face-before4.jpg
/images/디지털임플란트전후/전체임플란트_얼굴사진_전5.jpg|/images/digital-implant-before-after/full-implant-face-before5.jpg
/images/디지털임플란트전후/전체임플란트_얼굴사진_후1.jpg|/images/digital-implant-before-after/full-implant-face-after1.jpg
/images/디지털임플란트전후/전체임플란트_얼굴사진_후2.jpg|/images/digital-implant-before-after/full-implant-face-after2.jpg
/images/디지털임플란트전후/전체임플란트_얼굴사진_후3.jpg|/images/digital-implant-before-after/full-implant-face-after3.jpg
/images/디지털임플란트전후/전체임플란트_얼굴사진_후4.jpg|/images/digital-implant-before-after/full-implant-face-after4.jpg
/images/디지털임플란트전후/전체임플란트_얼굴사진_후5.jpg|/images/digital-implant-before-after/full-implant-face-after5.jpg
/images/디지털임플란트전후/전체임플란트_치아사진_전1.jpg|/images/digital-implant-before-after/full-implant-teeth-before1.jpg
/images/디지털임플란트전후/전체임플란트_치아사진_전2.jpg|/images/digital-implant-before-after/full-implant-teeth-before2.jpg
/images/디지털임플란트전후/전체임플란트_치아사진_전3.jpg|/images/digital-implant-before-after/full-implant-teeth-before3.jpg
/images/디지털임플란트전후/전체임플란트_치아사진_전4.jpg|/images/digital-implant-before-after/full-implant-teeth-before4.jpg
/images/디지털임플란트전후/전체임플란트_치아사진_전5.jpg|/images/digital-implant-before-after/full-implant-teeth-before5.jpg
/images/디지털임플란트전후/전체임플란트_치아사진_전6.jpg|/images/digital-implant-before-after/full-implant-teeth-before6.jpg
/images/디지털임플란트전후/전체임플란트_치아사진_후1.jpg|/images/digital-implant-before-after/full-implant-teeth-after1.jpg
/images/디지털임플란트전후/전체임플란트_치아사진_후2.jpg|/images/digital-implant-before-after/full-implant-teeth-after2.jpg
/images/디지털임플란트전후/전체임플란트_치아사진_후3.jpg|/images/digital-implant-before-after/full-implant-teeth-after3.jpg
/images/디지털임플란트전후/전체임플란트_치아사진_후4.jpg|/images/digital-implant-before-after/full-implant-teeth-after4.jpg
/images/디지털임플란트전후/전체임플란트_치아사진_후5.jpg|/images/digital-implant-before-after/full-implant-teeth-after5.jpg
/images/디지털임플란트전후/전체임플란트_치아사진_후6.jpg|/images/digital-implant-before-after/full-implant-teeth-after6.jpg

# Wisdom tooth cases folder
/images/사랑니케이스/단순/정아름_20250904_154946.jpg|/images/wisdom-tooth-cases/simple/case1-before.jpg
/images/사랑니케이스/단순/정아름_20250916_162712.jpg|/images/wisdom-tooth-cases/simple/case1-after.jpg
/images/사랑니케이스/매복/김현지_20201117_111604.jpg|/images/wisdom-tooth-cases/impacted/case1-before.jpg
/images/사랑니케이스/매복/김현지_20201211_115336.jpg|/images/wisdom-tooth-cases/impacted/case1-after.jpg
/images/사랑니케이스/부분/발치후 파노.jpg|/images/wisdom-tooth-cases/partial/post-extraction-pano.jpg
/images/사랑니케이스/부분/초진파노.jpg|/images/wisdom-tooth-cases/partial/initial-pano.jpg
/images/사랑니케이스/수평/김근주_20210809_165124.jpg|/images/wisdom-tooth-cases/horizontal/case1-before.jpg
/images/사랑니케이스/수평/김근주_20210817_170105.jpg|/images/wisdom-tooth-cases/horizontal/case1-after.jpg
/images/사랑니케이스/치근만곡/김서영B_20221214_151116.jpg|/images/wisdom-tooth-cases/curved-root/case1-before.jpg
/images/사랑니케이스/치근만곡/김서영B_20221228_155109.jpg|/images/wisdom-tooth-cases/curved-root/case1-after.jpg

# Gum treatment cases folder
/images/잇몸치료케이스/잇몸치료로 치아를 살린케이스 뼈가 차오르는케이스/1. 작은어금니도 발치해야하는상황.jpg|/images/gum-treatment-cases/bone-recovery/step1-extraction-needed.jpg
/images/잇몸치료케이스/잇몸치료로 치아를 살린케이스 뼈가 차오르는케이스/4.  작은어금니 생존완료.jpg|/images/gum-treatment-cases/bone-recovery/step4-molar-saved.jpg
/images/잇몸치료케이스/정기적인 관리 덕분에 50대에도 모든치아가 건강해요/관리받고있는상태.jpg|/images/gum-treatment-cases/regular-care/under-management.jpg
/images/잇몸치료케이스/정기적인 관리 덕분에 50대에도 모든치아가 건강해요/처음내원당시 .jpg|/images/gum-treatment-cases/regular-care/first-visit.jpg

# Nerve treatment cases folder
/images/충치치료신경치료보존치료케이스/신경치료로 살린케이스/서도현_11021901_36번 치근단병소치유/서도현_20230803_155500.jpg|/images/nerve-treatment-cases/saved/case1-before.jpg
/images/충치치료신경치료보존치료케이스/신경치료로 살린케이스/서도현_11021901_36번 치근단병소치유/서도현_20240229_185945_치료6개월후.jpg|/images/nerve-treatment-cases/saved/case1-after-6months.jpg
/images/충치치료신경치료보존치료케이스/신경치료로 살린케이스/임지원_83012801_37번_치근단병소치유/임지원_20230213_110959.jpg|/images/nerve-treatment-cases/saved/case2-before.jpg
/images/충치치료신경치료보존치료케이스/신경치료로 살린케이스/임지원_83012801_37번_치근단병소치유/임지원_20240527_144031_신경치료 1년 2개월후.jpg|/images/nerve-treatment-cases/saved/case2-after-14months.jpg
/images/충치치료신경치료보존치료케이스/재신경치료케이스/이진아_94122806_26번_재신경치료로 추가 근관 찾음/이진아_20220204_110028_초진.jpg|/images/nerve-treatment-cases/retreatment/case1-initial.jpg
/images/충치치료신경치료보존치료케이스/재신경치료케이스/이진아_94122806_26번_재신경치료로 추가 근관 찾음/이진아_20231219_141743_신경치료 1년9개월후.jpg|/images/nerve-treatment-cases/retreatment/case1-after-21months.jpg
/images/충치치료신경치료보존치료케이스/치근단절제술/이세미_20220808_14번_치근단절제술/이세미_20220808_140950_초진.jpg|/images/nerve-treatment-cases/apicoectomy/case1-initial.jpg
/images/충치치료신경치료보존치료케이스/치근단절제술/이세미_20220808_14번_치근단절제술/이세미_20231016_140213_재신경치료 및 치근단절제술 후 치근단병소 치유.jpg|/images/nerve-treatment-cases/apicoectomy/case1-healed.jpg

# Cases - Cosmetic treatment
/images/cases/심미치료/노화변색_미백전_구강사진_before.jpg|/images/cases/cosmetic/aging-discoloration-before.jpg
/images/cases/심미치료/노화변색_미백후_구강사진_after.jpg|/images/cases/cosmetic/aging-discoloration-after.jpg
/images/cases/심미치료/변색치아_미백전_구강사진_before.jpg|/images/cases/cosmetic/discolored-tooth-before.jpg
/images/cases/심미치료/변색치아_미백후_구강사진_after.jpg|/images/cases/cosmetic/discolored-tooth-after.jpg
/images/cases/심미치료/앞니변색_라미네이트전_구강사진_before.jpg|/images/cases/cosmetic/front-tooth-laminate-before.jpg
/images/cases/심미치료/앞니변색_라미네이트후_구강사진_after.jpg|/images/cases/cosmetic/front-tooth-laminate-after.jpg
/images/cases/심미치료/앞니틈_라미네이트전_구강사진_before.jpg|/images/cases/cosmetic/front-gap-laminate-before.jpg
/images/cases/심미치료/앞니틈_라미네이트후_구강사진_after.jpg|/images/cases/cosmetic/front-gap-laminate-after.jpg

# Cases - Gum treatment
/images/cases/잇몸치료/중증치주염_잇몸치료전_구강사진_before.jpg|/images/cases/gum-treatment/severe-periodontitis-before.jpg
/images/cases/잇몸치료/중증치주염_잇몸치료후_구강사진_after.jpg|/images/cases/gum-treatment/severe-periodontitis-after.jpg

# Cases - Cavity/Nerve/Prosthetic
/images/cases/충치/신경/보철치료통합/충치_신경치료전_엑스레이_before.jpg|/images/cases/cavity-nerve-prosthetic/cavity-nerve-before.jpg
/images/cases/충치/신경/보철치료통합/충치_신경치료후_엑스레이_after.jpg|/images/cases/cavity-nerve-prosthetic/cavity-nerve-after.jpg
/images/cases/충치/신경/보철치료통합/치근단병소_신경치료전_엑스레이_before.jpg|/images/cases/cavity-nerve-prosthetic/periapical-before.jpg
/images/cases/충치/신경/보철치료통합/치근단병소_신경치료후_뼈재생_엑스레이_after.jpg|/images/cases/cavity-nerve-prosthetic/periapical-after.jpg

# Cases - Wisdom tooth
/images/cases/사랑니/답안1) 위사랑니발치/답안1_ olizia_위사랑니_음식물끼임_잇몸부종_인접치충치/답안1_ olizia_위사랑니_음식물끼임_잇몸부종_인접치충치 (1)_before.jpg|/images/cases/wisdom-tooth/upper-extraction/case1-before.jpg
/images/cases/사랑니/답안1) 위사랑니발치/답안1_ olizia_위사랑니_음식물끼임_잇몸부종_인접치충치/답안1_ olizia_위사랑니_음식물끼임_잇몸부종_인접치충치 (2)_after.jpg|/images/cases/wisdom-tooth/upper-extraction/case1-after.jpg
/images/cases/사랑니/답안1) 위사랑니발치/답안1_김영규_위사랑니불편_음식물끼임, 씹을때 불편, 정출/답안1_김영규_위사랑니불편_음식물끼임, 씹을때 불편, 정출_after.jpg|/images/cases/wisdom-tooth/upper-extraction/case2-after.jpg
/images/cases/사랑니/답안1) 위사랑니발치/답안1_김영규_위사랑니불편_음식물끼임, 씹을때 불편, 정출/답안1_김영규_위사랑니불편_음식물끼임, 씹을때 불편, 정출_before.jpg|/images/cases/wisdom-tooth/upper-extraction/case2-before.jpg
/images/cases/사랑니/답안2) 아래사랑니발치/답안2) 고난위도 사랑니발치/답안2_ 아래사랑니_ 고난위도발치_수평매복/답안2_ 차민재_아래사랑니_ 고난위도발치_수평매복 (1)_before.jpg|/images/cases/wisdom-tooth/lower-extraction/difficult-case1-before.jpg
/images/cases/사랑니/답안2) 아래사랑니발치/답안2) 고난위도 사랑니발치/답안2_ 아래사랑니_ 고난위도발치_수평매복/답안2_ 차민재_아래사랑니_ 고난위도발치_수평매복 (2)_after.jpg|/images/cases/wisdom-tooth/lower-extraction/difficult-case1-after.jpg
/images/cases/사랑니/답안2) 아래사랑니발치/답안2) 고난위도 사랑니발치/답안2_ 아래사랑니_신경관근접고난위도발치/답안2_ 배서준_아래사랑니_신경관근접고난위도발치_after.jpg|/images/cases/wisdom-tooth/lower-extraction/nerve-adjacent-after.jpg
/images/cases/사랑니/답안2) 아래사랑니발치/답안2) 고난위도 사랑니발치/답안2_ 아래사랑니_신경관근접고난위도발치/답안2_ 배서준_아래사랑니_신경관근접고난위도발치_before.jpg|/images/cases/wisdom-tooth/lower-extraction/nerve-adjacent-before.jpg
/images/cases/사랑니/답안2) 아래사랑니발치/답안2) 사랑니를 방치되어 충치가 심한경우/답안2) 아래사랑니_발치시기를 놓쳐서 심한충치/답안2) 아래사랑니_발치시기를 놓쳐서 심한충치_after (1).jpg|/images/cases/wisdom-tooth/lower-extraction/neglected-cavity-after.jpg
/images/cases/사랑니/답안2) 아래사랑니발치/답안2) 사랑니를 방치되어 충치가 심한경우/답안2) 아래사랑니_발치시기를 놓쳐서 심한충치/답안2) 아래사랑니_발치시기를 놓쳐서 심한충치_before (1).jpg|/images/cases/wisdom-tooth/lower-extraction/neglected-cavity-before.jpg
/images/cases/사랑니/답안3) 아프지는 않는데, 검진받고싶어요/답안3_ 뼈안속에 뭍혀있어서 정기검진/답안3_ 김혜정_뼈안속에 뭍혀있어서 정기검진.jpg|/images/cases/wisdom-tooth/checkup/buried-in-bone.jpg
/images/cases/사랑니/답안3) 아프지는 않는데, 검진받고싶어요/답안3_아프지는 않지만 양치불량으로 예방적발치/답안3_최가영_아프지는 않지만 양치불량으로 예방적발치_after.jpg|/images/cases/wisdom-tooth/checkup/preventive-after.jpg
/images/cases/사랑니/답안3) 아프지는 않는데, 검진받고싶어요/답안3_아프지는 않지만 양치불량으로 예방적발치/답안3_최가영_아프지는 않지만 양치불량으로 예방적발치_before.jpg|/images/cases/wisdom-tooth/checkup/preventive-before.jpg

# Cases - Implant new
/images/cases/임플란트_new/임플란트_모든치아/[임플란트] 50세 여성거의 모든 치아를 발치 해야 할 것 같아요 after(3).jpg|/images/cases/implant-new/all-teeth/female-50-after.jpg
/images/cases/임플란트_new/임플란트_모든치아/[임플란트] 50세 여성거의 모든 치아를 발치 해야 할 것 같아요 before(2).jpg|/images/cases/implant-new/all-teeth/female-50-before.jpg
/images/cases/임플란트_new/임플란트_모든치아/[임플란트] 50세 여성거의 모든 치아를 발치 해야 할 것 같아요_당일임시치아.jpg|/images/cases/implant-new/all-teeth/female-50-same-day.jpg
/images/cases/임플란트_new/임플란트_모든치아/[임플란트] 60세 여성 거의 모든 치아를 발치 해야 할 것 같아요 after(2).jpg|/images/cases/implant-new/all-teeth/female-60-after.jpg
/images/cases/임플란트_new/임플란트_모든치아/[임플란트] 60세 여성 거의 모든 치아를 발치 해야 할 것 같아요 before(2).jpg|/images/cases/implant-new/all-teeth/female-60-before.jpg
/images/cases/임플란트_new/임플란트_앞니_다수/[임플란트상담] 여성 상악 앞니 다수 치아를 발치해야 할 것 같아요_after(1).jpg|/images/cases/implant-new/front-teeth/female-upper-after.jpg
/images/cases/임플란트_new/임플란트_앞니_다수/[임플란트상담] 여성 상악 앞니 다수 치아를 발치해야 할 것 같아요_before(3).jpg|/images/cases/implant-new/front-teeth/female-upper-before.jpg
/images/cases/임플란트_new/임플란트_앞니_다수/[임플란트상담] 여성 상악 앞니 다수 치아를 발치해야 할 것 같아요_수술직후임시치아.jpg|/images/cases/implant-new/front-teeth/female-upper-same-day.jpg
/images/cases/임플란트_new/임플란트_앞니_다수/최선필_상악앞니_남성/임플란트_ 남성 상악 앞니 다수 치아를 발치해야 할 것 같아요_after(1).jpg|/images/cases/implant-new/front-teeth/male-upper-after.jpg
/images/cases/임플란트_new/임플란트_앞니_다수/최선필_상악앞니_남성/임플란트_ 남성 상악 앞니 다수 치아를 발치해야 할 것 같아요_before(1).jpg|/images/cases/implant-new/front-teeth/male-upper-before.jpg
/images/cases/임플란트_new/임플란트_어금니_다수/문준호_음주_흡연/임플란트_ 음주흡연_어금니 다수 치아를 발치해야 할 것 같아요 after(1).jpg|/images/cases/implant-new/molar/drinking-smoking-after.jpg
/images/cases/임플란트_new/임플란트_어금니_다수/문준호_음주_흡연/임플란트_ 음주흡연_어금니 다수 치아를 발치해야 할 것 같아요 before(1).jpg|/images/cases/implant-new/molar/drinking-smoking-before.jpg
/images/cases/임플란트_new/임플란트_어금니_다수/박영상_잇몸이안좋아요/임플란트_ 잇몸불량 치아공포증_어금니 다수 치아를 발치해야 할 것 같아요 after(1).jpg|/images/cases/implant-new/molar/bad-gums-after.jpg
/images/cases/임플란트_new/임플란트_어금니_다수/박영상_잇몸이안좋아요/임플란트_ 잇몸불량 치아공포증_어금니 다수 치아를 발치해야 할 것 같아요 before(1).jpg|/images/cases/implant-new/molar/bad-gums-before.jpg
/images/cases/임플란트_new/임플란트_윗니_아랫니_한쪽/남성 70세/임플란트_ 70세 남성 윗니 또는 아랫니 한쪽 전체를 발치해야 할 것 같아요_after.jpg|/images/cases/implant-new/one-side/male-70-after.jpg
/images/cases/임플란트_new/임플란트_윗니_아랫니_한쪽/남성 70세/임플란트_ 70세 남성 윗니 또는 아랫니 한쪽 전체를 발치해야 할 것 같아요_before.jpg|/images/cases/implant-new/one-side/male-70-before.jpg
/images/cases/임플란트_new/임플란트_윗니_아랫니_한쪽/남성2 60세/임플란트_ 60세 남성 윗니 또는 아랫니 한쪽 전체를 발치해야 할 것 같아요_after.jpg|/images/cases/implant-new/one-side/male-60-after.jpg
/images/cases/임플란트_new/임플란트_윗니_아랫니_한쪽/남성2 60세/임플란트_ 60세 남성 윗니 또는 아랫니 한쪽 전체를 발치해야 할 것 같아요_before.jpg|/images/cases/implant-new/one-side/male-60-before.jpg
/images/cases/임플란트_new/임플란트_윗니_아랫니_한쪽/여성_윗니_틀니_70대/임플란트_ 여성_윗니_틀니_70대 윗니 또는 아랫니 한쪽 전체를 발치해야 할 것 같아요_after.jpg|/images/cases/implant-new/one-side/female-70-denture-after.jpg
/images/cases/임플란트_new/임플란트_윗니_아랫니_한쪽/여성_윗니_틀니_70대/임플란트_ 여성_윗니_틀니_70대 윗니 또는 아랫니 한쪽 전체를 발치해야 할 것 같아요_before.jpg|/images/cases/implant-new/one-side/female-70-denture-before.jpg
/images/cases/임플란트_new/임플란트_재수술/이성건_남성_어금니재수술_고난위도/임플란트_ 임플란트 재수술이 필요해요 after.jpg|/images/cases/implant-new/revision/male-molar-after.jpg
/images/cases/임플란트_new/임플란트_재수술/이성건_남성_어금니재수술_고난위도/임플란트_ 임플란트 재수술이 필요해요 before.jpg|/images/cases/implant-new/revision/male-molar-before.jpg
MAPPING

echo "Mapping file created."
echo ""
echo "Total mappings: $(grep -v '^#' scripts/path-mapping.txt | grep -v '^$' | wc -l)"
