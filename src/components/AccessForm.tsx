import React, { useState, useMemo } from 'react';
import { X, Check, GripVertical } from 'lucide-react';
import { artists } from '../data/artists';

interface AccessFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AccessForm({ isOpen, onClose }: AccessFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    selectedArtists: [] as number[],
    accessType: 'basic',
  });

  const pricing = useMemo(() => {
    if (formData.accessType === 'vip') return 99;
    if (formData.accessType === 'standard') return 49;
    return formData.selectedArtists.length === 1 ? 15 : 0;
  }, [formData.selectedArtists.length, formData.accessType]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.selectedArtists.length === 0) {
      alert('Please select at least one artist');
      return;
    }
    window.location.href = 'https://buy.stripe.com/5kA6p95Urczz5So4gp';
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-6 w-full max-w-2xl relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X className="w-6 h-6" />
        </button>
        
        <h2 className="text-2xl font-bold mb-6">Support Your Favorite Artists</h2>
        <p className="text-gray-600 mb-6">
          100% of your payment goes directly to the artists. You'll get access to all performances
          and Q&A sessions, regardless of your package. Choose your favorite artists to receive their
          exclusive MINY collectibles.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Choose Your Support Package
            </label>
            <div className="grid md:grid-cols-3 gap-4">
              <button
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, accessType: 'basic', selectedArtists: [] }))}
                className={`p-4 border rounded-lg text-left ${
                  formData.accessType === 'basic' 
                    ? 'border-purple-600 bg-purple-50' 
                    : 'border-gray-200'
                }`}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold">Basic Support</span>
                  <span className="text-sm text-gray-600">$15</span>
                </div>
                <p className="text-sm text-gray-600">
                  All performances + 1 MINY collectible
                </p>
              </button>
              <button
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, accessType: 'standard', selectedArtists: [] }))}
                className={`p-4 border rounded-lg text-left ${
                  formData.accessType === 'standard' 
                    ? 'border-purple-600 bg-purple-50' 
                    : 'border-gray-200'
                }`}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold">Enhanced Support</span>
                  <span className="text-sm text-gray-600">$49</span>
                </div>
                <p className="text-sm text-gray-600">
                  All performances + 3 MINY collectibles
                </p>
              </button>
              <button
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, accessType: 'vip', selectedArtists: artists.map(a => a.id) }))}
                className={`p-4 border rounded-lg text-left ${
                  formData.accessType === 'vip' 
                    ? 'border-purple-600 bg-purple-50' 
                    : 'border-gray-200'
                }`}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold">VIP Supporter</span>
                  <span className="text-sm text-gray-600">$99</span>
                </div>
                <p className="text-sm text-gray-600">
                  All performances + all MINYs + after-party
                </p>
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {formData.accessType === 'vip' 
                ? 'Supporting All Artists' 
                : `Select Artists to Support (${formData.accessType === 'basic' ? '1' : '3'})`}
            </label>
            <div className="space-y-2">
              {artists.map((artist) => (
                <button
                  key={artist.id}
                  type="button"
                  onClick={() => {
                    const isSelected = formData.selectedArtists.includes(artist.id);
                    let newSelected = isSelected
                      ? formData.selectedArtists.filter(id => id !== artist.id)
                      : [...formData.selectedArtists, artist.id];
                    
                    if (formData.accessType === 'basic' && newSelected.length > 1) {
                      newSelected = newSelected.slice(-1);
                    } else if (formData.accessType === 'standard' && newSelected.length > 3) {
                      newSelected = newSelected.slice(-3);
                    }
                    
                    setFormData({ ...formData, selectedArtists: newSelected });
                  }}
                  disabled={formData.accessType === 'vip'}
                  className={`w-full p-4 border rounded-lg text-left flex items-center gap-3 ${
                    formData.selectedArtists.includes(artist.id)
                      ? 'border-purple-600 bg-purple-50'
                      : 'border-gray-200'
                  }`}
                >
                  {formData.selectedArtists.includes(artist.id) && (
                    <span className="w-6 h-6 flex items-center justify-center bg-purple-600 text-white rounded-full text-sm">
                      {formData.selectedArtists.indexOf(artist.id) + 1}
                    </span>
                  )}
                  <div className="flex-1">
                    <div className="font-semibold">{artist.name}</div>
                    <div className="text-sm text-gray-600">{artist.type}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="border-t pt-4">
            <div className="flex justify-between items-center mb-4">
              <span className="font-semibold">Total Support Amount:</span>
              <span className="text-2xl font-bold">${pricing}</span>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              100% of this amount goes directly to supporting your selected artists.
            </p>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Support Artists & Get Access
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}