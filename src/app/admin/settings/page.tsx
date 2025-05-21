'use client';

import React, { useState } from 'react';
import { 
  ArrowPathIcon, 
  CheckIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';

type SettingSection = {
  id: string;
  title: string;
  description: string;
  settings: Setting[];
};

type Setting = {
  id: string;
  name: string;
  description: string;
  type: 'toggle' | 'text' | 'select' | 'number' | 'button';
  value: any;
  options?: { value: string; label: string }[];
};

export default function SettingsPage() {
  const [isUpdating, setIsUpdating] = useState(false);
  const [updateMessage, setUpdateMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);
  const [settingSections, setSettingSections] = useState<SettingSection[]>([
    {
      id: 'general',
      title: '一般設定',
      description: 'サイト全体の基本設定',
      settings: [
        {
          id: 'siteName',
          name: 'サイト名',
          description: 'サイトのタイトルとして表示される名前',
          type: 'text',
          value: 'SalesTec Landscape Japan',
        },
        {
          id: 'adminEmail',
          name: '管理者メールアドレス',
          description: '通知の送信先となるメールアドレス',
          type: 'text',
          value: 'admin@salestec.example.com',
        },
        {
          id: 'itemsPerPage',
          name: 'ページあたりの表示件数',
          description: '一覧ページで1ページに表示するアイテム数',
          type: 'number',
          value: 20,
        },
      ],
    },
    {
      id: 'update',
      title: '更新設定',
      description: 'データ更新に関する設定',
      settings: [
        {
          id: 'autoUpdate',
          name: '自動更新',
          description: '定期的なデータの自動更新を有効にする',
          type: 'toggle',
          value: true,
        },
        {
          id: 'updateFrequency',
          name: '更新頻度',
          description: 'データを自動的に更新する頻度',
          type: 'select',
          value: 'daily',
          options: [
            { value: 'hourly', label: '1時間ごと' },
            { value: 'daily', label: '1日1回' },
            { value: 'weekly', label: '週1回' },
            { value: 'monthly', label: '月1回' },
          ],
        },
        {
          id: 'runUpdate',
          name: '今すぐ更新',
          description: '手動でデータの更新を実行します',
          type: 'button',
          value: '更新を実行',
        },
      ],
    },
    {
      id: 'notification',
      title: '通知設定',
      description: '通知に関する設定',
      settings: [
        {
          id: 'emailNotification',
          name: 'メール通知',
          description: '更新や変更があった際にメールで通知を受け取る',
          type: 'toggle',
          value: true,
        },
        {
          id: 'notificationFrequency',
          name: '通知頻度',
          description: '通知をまとめて送信する頻度',
          type: 'select',
          value: 'daily',
          options: [
            { value: 'immediate', label: '即時' },
            { value: 'hourly', label: '1時間ごとにまとめて' },
            { value: 'daily', label: '1日1回まとめて' },
            { value: 'weekly', label: '週1回まとめて' },
          ],
        },
      ],
    },
  ]);

  const handleSettingChange = (sectionId: string, settingId: string, value: any) => {
    const updatedSections = settingSections.map(section => {
      if (section.id === sectionId) {
        const updatedSettings = section.settings.map(setting => {
          if (setting.id === settingId) {
            return { ...setting, value };
          }
          return setting;
        });
        return { ...section, settings: updatedSettings };
      }
      return section;
    });
    
    setSettingSections(updatedSections);
  };

  const handleRunUpdate = async () => {
    setIsUpdating(true);
    try {
      // TODO: APIを呼び出して更新処理を実行する
      // 処理の完了を模擬するために少し待機
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setUpdateMessage({ type: 'success', text: '更新が完了しました' });
      setTimeout(() => setUpdateMessage(null), 3000);
    } catch (error) {
      setUpdateMessage({ type: 'error', text: '更新に失敗しました' });
      setTimeout(() => setUpdateMessage(null), 3000);
    } finally {
      setIsUpdating(false);
    }
  };

  const handleSaveSettings = async () => {
    setIsUpdating(true);
    try {
      // TODO: APIを呼び出して設定を保存する
      // 処理の完了を模擬するために少し待機
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setUpdateMessage({ type: 'success', text: '設定を保存しました' });
      setTimeout(() => setUpdateMessage(null), 3000);
    } catch (error) {
      setUpdateMessage({ type: 'error', text: '設定の保存に失敗しました' });
      setTimeout(() => setUpdateMessage(null), 3000);
    } finally {
      setIsUpdating(false);
    }
  };

  const renderSetting = (section: SettingSection, setting: Setting) => {
    switch (setting.type) {
      case 'text':
        return (
          <input
            type="text"
            id={setting.id}
            value={setting.value}
            onChange={(e) => handleSettingChange(section.id, setting.id, e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        );
      case 'number':
        return (
          <input
            type="number"
            id={setting.id}
            value={setting.value}
            onChange={(e) => handleSettingChange(section.id, setting.id, e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        );
      case 'select':
        return (
          <select
            id={setting.id}
            value={setting.value}
            onChange={(e) => handleSettingChange(section.id, setting.id, e.target.value)}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            {setting.options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );
      case 'toggle':
        return (
          <div className="flex items-center">
            <button
              type="button"
              onClick={() => handleSettingChange(section.id, setting.id, !setting.value)}
              className={`${
                setting.value ? 'bg-indigo-600' : 'bg-gray-200'
              } relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
            >
              <span
                aria-hidden="true"
                className={`${
                  setting.value ? 'translate-x-5' : 'translate-x-0'
                } pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`}
              ></span>
            </button>
            <span className="ml-3 text-sm text-gray-500">
              {setting.value ? 'オン' : 'オフ'}
            </span>
          </div>
        );
      case 'button':
        return (
          <button
            type="button"
            onClick={handleRunUpdate}
            disabled={isUpdating}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
          >
            {isUpdating ? (
              <>
                <ArrowPathIcon className="animate-spin -ml-1 mr-2 h-5 w-5" />
                更新中...
              </>
            ) : (
              setting.value
            )}
          </button>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-lg font-medium text-gray-900">設定</h2>
        <p className="mt-1 text-sm text-gray-500">
          サイトとデータ管理に関する設定
        </p>
      </div>

      {/* 通知メッセージ */}
      {updateMessage && (
        <div className={`mb-6 p-4 rounded-md ${
          updateMessage.type === 'success' ? 'bg-green-50' : 'bg-red-50'
        }`}>
          <div className="flex items-center">
            <div className={`flex-shrink-0 ${
              updateMessage.type === 'success' ? 'text-green-400' : 'text-red-400'
            }`}>
              {updateMessage.type === 'success' ? (
                <CheckIcon className="h-5 w-5" aria-hidden="true" />
              ) : (
                <XMarkIcon className="h-5 w-5" aria-hidden="true" />
              )}
            </div>
            <div className={`ml-3 text-sm font-medium ${
              updateMessage.type === 'success' ? 'text-green-800' : 'text-red-800'
            }`}>
              {updateMessage.text}
            </div>
          </div>
        </div>
      )}

      {/* 設定セクション */}
      <div className="space-y-8">
        {settingSections.map((section) => (
          <div key={section.id} className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                {section.title}
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                {section.description}
              </p>
            </div>
            <div className="px-4 py-5 sm:px-6">
              <dl className="divide-y divide-gray-200">
                {section.settings.map((setting) => (
                  <div key={setting.id} className="py-4 sm:grid sm:grid-cols-3 sm:gap-4">
                    <dt className="text-sm font-medium text-gray-500">
                      <label htmlFor={setting.id} className="block">
                        {setting.name}
                      </label>
                      <p className="mt-1 text-xs text-gray-500">
                        {setting.description}
                      </p>
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {renderSetting(section, setting)}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        ))}
      </div>

      {/* 保存ボタン */}
      <div className="mt-8 flex justify-end">
        <button
          type="button"
          onClick={handleSaveSettings}
          disabled={isUpdating}
          className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
        >
          {isUpdating ? '保存中...' : '保存'}
        </button>
      </div>
    </div>
  );
} 