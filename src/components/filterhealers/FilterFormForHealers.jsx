import React, { useState } from 'react';
import { MapIcon, X, Info, Landmark, Building2, Castle, ChevronDown, Search } from 'lucide-react';

const filterOptions = [
    { id: 'expertise', label: 'Expertise' },
    { id: 'languages', label: 'Languages' },
    { id: 'price', label: 'Price' },
    { id: 'gender', label: 'Gender' },
];

const cities = [
    // { id: 'bengaluru', name: 'Bengaluru', areas: 'Indiranagar, Whitefield, Koramangala, JP Nagar, Sarjapur Road, Tha...', icon: Landmark, color: 'bg-blue-100 text-blue-500' },
    { id: 'mumbai', name: 'Mumbai', areas: 'Bandra West', icon: Castle, color: 'bg-pink-100 text-pink-500' },
    { id: 'new-delhi', name: 'New Delhi', areas: 'Safdarjung', icon: Building2, color: 'bg-green-100 text-green-500' },
    { id: 'gurugram', name: 'Gurugram', areas: 'Amaha, Children First', icon: Building2, color: 'bg-red-100 text-red-500' },
];

const expertiseOptions = [
    'Anxiety disorders',
    'Depressive disorders',
    'Relationship skills',
    'Stress management',
    'Addiction',
    'Anger management',
];

export default function FilterFormForHealers() {
    const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
    const [selectedCity, setSelectedCity] = useState(null);

    const [isFiltersModalOpen, setIsFiltersModalOpen] = useState(false);
    const [activeFilterTab, setActiveFilterTab] = useState('expertise');
    const [searchQuery, setSearchQuery] = useState('');

    const handleSelectClick = () => {
        setIsLocationModalOpen(false);
    };

    return (
        <div className="flex flex-col items-center justify-center w-full max-w-5xl mx-auto py-6 relative">
            <h2 className="text-[#6e627f] font-medium text-lg md:text-xl mb-8">
                Find an expert who understands your needs.
            </h2>

            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-5 w-full">
                {/* Location Filter */}
                <button
                    onClick={() => setIsLocationModalOpen(true)}
                    className="flex items-center justify-center gap-2.5 px-5 py-2.5 rounded-full text-[14px] text-gray-700 font-medium bg-white border border-gray-300 hover:border-[#b39cd1] hover:text-[#6e627f] transition-all cursor-pointer shadow-sm focus:outline-none shrink-0"
                >
                    <MapIcon size={18} className="text-gray-500" strokeWidth={2} />
                    {selectedCity ? cities.find(c => c.id === selectedCity)?.name || 'Select Centre' : 'Select Centre'}
                    <ChevronDown size={18} className="text-gray-500" strokeWidth={2} />
                </button>

                {/* Divider Line */}
                <div className="hidden sm:block w-[1px] h-8 bg-gray-300 mx-1"></div>

                {/* Other Filters */}
                <div className="flex flex-wrap items-center justify-center gap-3">
                    {filterOptions.map((option) => {
                        return (
                            <button
                                key={option.id}
                                onClick={() => {
                                    setActiveFilterTab(option.id);
                                    setIsFiltersModalOpen(true);
                                }}
                                className={`flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-[14px] font-medium transition-all duration-200 border focus:outline-none cursor-pointer shadow-sm shrink-0 bg-white text-gray-700 border-gray-300 hover:border-[#b39cd1] hover:text-[#6e627f]`}
                            >
                                {option.label}
                                <ChevronDown
                                    size={18}
                                    className="text-gray-500"
                                    strokeWidth={2}
                                />
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Location UI Modal */}
            {isLocationModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
                    <div className="bg-white rounded-2xl w-full max-w-lg flex flex-col shadow-2xl animate-in fade-in zoom-in duration-200 text-left">

                        {/* Header */}
                        <div className="flex items-center justify-between p-5 border-b border-gray-100">
                            <h3 className="text-xl font-bold text-gray-800">Select Centre</h3>
                            <button
                                onClick={() => setIsLocationModalOpen(false)}
                                className="p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-500 cursor-pointer"
                            >
                                <X size={20} strokeWidth={2.5} />
                            </button>
                        </div>

                        {/* Body */}
                        <div className="p-4 sm:p-5 overflow-y-auto max-h-[65vh]">
                            <p className="text-gray-600 mb-4 sm:mb-5 font-medium text-[14px] sm:text-[15px]">
                                For an in-person session, select your preferred city or centre below.
                            </p>

                            <div className="flex flex-col gap-3">
                                {cities.map((city) => {
                                    const CityIcon = city.icon;
                                    const isCitySelected = selectedCity === city.id;

                                    return (
                                        <div
                                            key={city.id}
                                            onClick={() => setSelectedCity(city.id)}
                                            className={`flex items-center gap-3 sm:gap-4 p-3 rounded-xl border-2 cursor-pointer transition-all ${isCitySelected
                                                ? 'border-[#8b6fa8] bg-[#faf8fc]'
                                                : 'border-gray-100 hover:border-gray-200 bg-white'
                                                }`}
                                        >
                                            <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shrink-0 ${city.color}`}>
                                                <CityIcon size={20} className="sm:w-6 sm:h-6" />
                                            </div>

                                            <div className="flex-1">
                                                <h4 className="font-bold text-gray-800 text-[14px] sm:text-[15px]">{city.name}</h4>
                                                <p className="text-[12px] sm:text-[13px] text-gray-500 mt-0.5 line-clamp-1">{city.areas}</p>
                                            </div>

                                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 sm:mr-1 ${isCitySelected ? 'border-[#8b6fa8]' : 'border-gray-300'
                                                }`}>
                                                {isCitySelected && <div className="w-2.5 h-2.5 rounded-full bg-[#8b6fa8]" />}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="mt-5 sm:mt-6 flex items-start gap-2.5 text-[12px] sm:text-[13px] text-gray-600">
                                <Info size={16} className="text-gray-600 mt-0.5 shrink-0" />
                                <span>All experts available at the centres are also available online.</span>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="p-4 sm:p-5 border-t border-gray-100 flex items-center justify-between gap-3">
                            <button
                                onClick={() => setSelectedCity(null)}
                                className="px-3 sm:px-6 py-2.5 rounded-full border border-gray-200 text-gray-500 font-bold text-[12px] sm:text-[13px] tracking-wide hover:bg-gray-50 transition-colors cursor-pointer w-full sm:w-auto"
                            >
                                CLEAR ALL
                            </button>
                            <button
                                onClick={handleSelectClick}
                                disabled={!selectedCity}
                                className={`px-6 sm:px-10 py-2.5 rounded-full font-bold text-[12px] sm:text-[13px] tracking-wide transition-all w-full sm:w-auto ${selectedCity
                                    ? 'bg-gradient-to-r from-[#b39cd1] to-[#8b6fa8] text-white shadow-md hover:shadow-lg cursor-pointer'
                                    : 'bg-[#d2d4d9] text-white cursor-not-allowed'
                                    }`}
                            >
                                SELECT
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Filters Modal */}
            {isFiltersModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
                    <div className="bg-white rounded-xl w-full max-w-3xl flex flex-col shadow-2xl animate-in fade-in zoom-in duration-200 h-[80vh] max-h-[700px] overflow-hidden text-left">
                        
                        {/* Header */}
                        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-gray-200">
                            <h3 className="text-lg sm:text-xl font-bold text-gray-800">Filters</h3>
                            <button
                                onClick={() => setIsFiltersModalOpen(false)}
                                className="p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-500 cursor-pointer"
                            >
                                <X size={20} strokeWidth={2.5} />
                            </button>
                        </div>

                        {/* Body layout - responsive */}
                        <div className="flex flex-col sm:flex-row flex-1 overflow-hidden">
                            {/* Sidebar / Top overflow tabs */}
                            <div className="w-full sm:w-1/3 bg-white sm:bg-[#fdfbfd] border-b sm:border-b-0 sm:border-r border-gray-200 flex flex-row sm:flex-col overflow-x-auto sm:py-2 shrink-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                                {filterOptions.map(option => (
                                    <button
                                        key={option.id}
                                        onClick={() => setActiveFilterTab(option.id)}
                                        className={`shrink-0 text-center sm:text-left px-5 sm:px-6 py-3 sm:py-4 text-[14px] sm:text-[15px] cursor-pointer transition-colors relative border-none focus:outline-none ${
                                            activeFilterTab === option.id 
                                                ? 'bg-[#f0eaf7] text-[#6e627f] font-bold' 
                                                : 'text-gray-600 hover:bg-gray-50 sm:hover:bg-gray-100 font-medium'
                                        }`}
                                    >
                                        {/* Desktop side line */}
                                        {activeFilterTab === option.id && (
                                            <div className="hidden sm:block absolute left-0 top-0 bottom-0 w-1 bg-[#8b6fa8]"></div>
                                        )}
                                        {/* Mobile bottom line */}
                                        {activeFilterTab === option.id && (
                                            <div className="block sm:hidden absolute left-0 right-0 bottom-0 h-[2px] bg-[#8b6fa8]"></div>
                                        )}
                                        {option.label}
                                    </button>
                                ))}
                            </div>

                            {/* Main Content Area */}
                            <div className="w-full sm:w-2/3 p-4 sm:p-6 flex flex-col overflow-y-auto">
                                {/* Search Bar */}
                                {activeFilterTab === 'expertise' && (
                                    <div className="relative mb-5 sm:mb-6">
                                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                        <input 
                                            type="text" 
                                            placeholder="Search Concern" 
                                            className="w-full pl-11 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#8b6fa8] focus:ring-1 focus:ring-[#8b6fa8] text-[14px] sm:text-[15px]"
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                        />
                                    </div>
                                )}

                                {/* Checkbox List */}
                                {activeFilterTab === 'expertise' ? (
                                    <div className="flex flex-col gap-4 sm:gap-6 mt-1 sm:mt-2">
                                        {expertiseOptions.map((item, idx) => (
                                            <label key={idx} className="flex items-start sm:items-center gap-3 sm:gap-4 cursor-pointer group">
                                                <div className="relative flex items-center shrink-0 mt-0.5 sm:mt-0">
                                                    <input type="checkbox" className="peer w-5 h-5 opacity-0 absolute cursor-pointer" />
                                                    <div className="w-5 h-5 rounded border-2 border-gray-400 flex items-center justify-center peer-checked:bg-[#8b6fa8] peer-checked:border-[#8b6fa8] transition-colors bg-white">
                                                        <svg className="w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <span className="text-[14px] sm:text-[15px] text-gray-700 leading-tight sm:leading-normal">{item}</span>
                                            </label>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="flex items-center justify-center h-full text-gray-400 italic text-sm">
                                        Content for {filterOptions.find(o => o.id === activeFilterTab)?.label}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="p-4 sm:p-5 border-t border-gray-200 flex items-center justify-between bg-white gap-3">
                            <button
                                className="px-4 sm:px-6 py-2.5 rounded-full border border-gray-300 text-gray-500 font-bold text-[12px] sm:text-[13px] tracking-wide hover:bg-gray-50 transition-colors cursor-pointer w-full sm:w-auto"
                            >
                                CLEAR ALL
                            </button>
                            <button
                                className="px-6 sm:px-8 py-2.5 rounded-full font-bold text-[12px] sm:text-[13px] tracking-wide bg-[#d2d4d9] text-white cursor-not-allowed w-full sm:w-auto"
                            >
                                APPLY FILTER
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
