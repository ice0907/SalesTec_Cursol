import React from 'react';

type FilterOption = {
  id: string;
  name: string;
};

type FilterBarProps = {
  pricingOptions: FilterOption[];
  sizeOptions: FilterOption[];
  selectedPricing: string[];
  selectedSize: string[];
  showJapaneseOnly: boolean;
  onPricingChange: (selected: string[]) => void;
  onSizeChange: (selected: string[]) => void;
  onJapaneseOnlyChange: (checked: boolean) => void;
};

/**
 * フィルターバーコンポーネント
 * 
 * ツール一覧をフィルタリングするためのコンポーネント
 */
export function FilterBar({
  pricingOptions,
  sizeOptions,
  selectedPricing,
  selectedSize,
  showJapaneseOnly,
  onPricingChange,
  onSizeChange,
  onJapaneseOnlyChange,
}: FilterBarProps) {
  const handlePricingChange = (id: string) => {
    if (selectedPricing.includes(id)) {
      onPricingChange(selectedPricing.filter(item => item !== id));
    } else {
      onPricingChange([...selectedPricing, id]);
    }
  };

  const handleSizeChange = (id: string) => {
    if (selectedSize.includes(id)) {
      onSizeChange(selectedSize.filter(item => item !== id));
    } else {
      onSizeChange([...selectedSize, id]);
    }
  };

  return (
    <div className="card mb-8">
      <div className="p-6">
        <div className="flex items-center mb-6">
          <svg className="w-5 h-5 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.414A1 1 0 013 6.707V4z" />
          </svg>
          <h2 className="text-lg font-semibold text-neutral-900">フィルター</h2>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-sm font-semibold text-neutral-700 mb-4 flex items-center">
              <svg className="w-4 h-4 mr-2 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
              価格モデル
            </h3>
            <div className="flex flex-wrap gap-2">
              {pricingOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => handlePricingChange(option.id)}
                  className={`inline-flex items-center px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 transform hover:scale-105 active:scale-95 ${
                    selectedPricing.includes(option.id)
                      ? 'bg-primary-500 text-white shadow-soft border border-primary-600'
                      : 'bg-neutral-100 text-neutral-700 border border-neutral-200 hover:bg-neutral-200 hover:border-neutral-300'
                  }`}
                >
                  {option.name}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-neutral-700 mb-4 flex items-center">
              <svg className="w-4 h-4 mr-2 text-secondary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              対象規模
            </h3>
            <div className="flex flex-wrap gap-2">
              {sizeOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => handleSizeChange(option.id)}
                  className={`inline-flex items-center px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 transform hover:scale-105 active:scale-95 ${
                    selectedSize.includes(option.id)
                      ? 'bg-secondary-500 text-white shadow-soft border border-secondary-600'
                      : 'bg-neutral-100 text-neutral-700 border border-neutral-200 hover:bg-neutral-200 hover:border-neutral-300'
                  }`}
                >
                  {option.name}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-neutral-200">
            <label className="flex items-center cursor-pointer group">
              <div className="relative">
                <input
                  type="checkbox"
                  checked={showJapaneseOnly}
                  onChange={(e) => onJapaneseOnlyChange(e.target.checked)}
                  className="sr-only"
                />
                <div className={`w-5 h-5 rounded-lg border-2 transition-all duration-200 ${
                  showJapaneseOnly
                    ? 'bg-success-500 border-success-500'
                    : 'border-neutral-300 group-hover:border-neutral-400'
                }`}>
                  {showJapaneseOnly && (
                    <svg className="w-3 h-3 text-white absolute top-0.5 left-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
              </div>
              <span className="ml-3 text-sm font-medium text-neutral-700 group-hover:text-neutral-900 transition-colors duration-200 flex items-center">
                🇯🇵 日本語対応のみ表示
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}   