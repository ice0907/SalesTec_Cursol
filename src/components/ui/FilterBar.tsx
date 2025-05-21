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
    <div className="mt-4 rounded-md bg-white p-4 shadow-sm">
      <div className="mb-4">
        <h3 className="mb-2 text-sm font-medium text-gray-700">価格モデル</h3>
        <div className="flex flex-wrap gap-2">
          {pricingOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => handlePricingChange(option.id)}
              className={`rounded-full px-3 py-1 text-xs font-medium ${
                selectedPricing.includes(option.id)
                  ? 'bg-blue-100 text-blue-800'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {option.name}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h3 className="mb-2 text-sm font-medium text-gray-700">対象規模</h3>
        <div className="flex flex-wrap gap-2">
          {sizeOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => handleSizeChange(option.id)}
              className={`rounded-full px-3 py-1 text-xs font-medium ${
                selectedSize.includes(option.id)
                  ? 'bg-purple-100 text-purple-800'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {option.name}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            checked={showJapaneseOnly}
            onChange={(e) => onJapaneseOnlyChange(e.target.checked)}
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
          />
          <span className="ml-2 text-sm text-gray-700">日本語対応のみ表示</span>
        </label>
      </div>
    </div>
  );
} 