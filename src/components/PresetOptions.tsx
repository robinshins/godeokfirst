'use client';

import { PresetOption } from '@/lib/types';

interface PresetOptionsProps {
  onSelect: (content: string) => void;
  selectedPreset?: string;
}

const presetOptions: PresetOption[] = [
  {
    id: 'implant',
    title: '임플란트',
    description: '치아 결손, 인공치근 식립'
  },
  {
    id: 'endodontics',
    title: '보존치료(신경치료)',
    description: '치수 염증, 근관 치료'
  },
  {
    id: 'prosthetics',
    title: '보철치료(크라운)',
    description: '크라운, 인레이/온레이'
  },
  {
    id: 'orthodontics',
    title: '치아교정',
    description: '교정 장치, 치열·턱 교정'
  },
  {
    id: 'whitening',
    title: '치아미백',
    description: '치아 착색, 미백 시술'
  },
  {
    id: 'wisdom_tooth',
    title: '사랑니 발치',
    description: '매복·부분 매복 발치'
  },
  {
    id: 'periodontal',
    title: '잇몸케어',
    description: '스케일링·잇몸치료'
  },
  {
    id: 'caries',
    title: '충치치료',
    description: '충치 제거 및 수복'
  },
  {
    id: 'tmj',
    title: '턱관절치료',
    description: '턱관절 통증·개구 장애'
  },
  {
    id: 'etc',
    title: '기타',
    description: '기타 치과 상담'
  }
];

export default function PresetOptions({ onSelect, selectedPreset }: PresetOptionsProps) {
  return (
    <div className="grid grid-cols-3 gap-2">
      {presetOptions.map((option) => (
        <button
          key={option.id}
          type="button"
          onClick={() => onSelect(option.title)}
          className={`px-3 py-2.5 text-xs rounded-lg border transition-all font-medium ${
            selectedPreset === option.title
              ? 'border-indigo-500 bg-indigo-50 text-indigo-700 shadow-sm ring-1 ring-indigo-500/20'
              : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-600 hover:text-slate-900'
          }`}
        >
          {option.title}
        </button>
      ))}
    </div>
  );
}