import React, { useState } from 'react';
import { Sparkles, Palette, Lightbulb } from 'lucide-react';

const NEON_COLORS = [
  { name: 'Classic Red', value: '#ff003c' },
  { name: 'Electric Blue', value: '#00f7ff' },
  { name: 'Toxic Green', value: '#39ff14' },
  { name: 'Hot Pink', value: '#ff69b4' },
  { name: 'Purple Haze', value: '#bf00ff' },
  { name: 'Golden', value: '#ffdd00' },
];

function App() {
  const [text, setText] = useState('Neon Dreams');
  const [color, setColor] = useState(NEON_COLORS[0].value);
  const [intensity, setIntensity] = useState(4);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="pt-8 pb-6 text-center">
        <h1 className="text-4xl font-bold flex items-center justify-center gap-2">
          <Sparkles className="w-8 h-8" />
          Neon Sign Studio
        </h1>
        <p className="text-gray-400 mt-2">Create your custom neon masterpiece</p>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Controls */}
          <div className="space-y-6 bg-gray-800 p-6 rounded-xl">
            <div>
              <label className="block text-sm font-medium mb-2">Your Text</label>
              <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Type your text..."
                maxLength={30}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                <Palette className="w-4 h-4" /> Neon Color
              </label>
              <div className="grid grid-cols-3 gap-2">
                {NEON_COLORS.map((neonColor) => (
                  <button
                    key={neonColor.value}
                    onClick={() => setColor(neonColor.value)}
                    className={`h-12 rounded-lg transition-all ${
                      color === neonColor.value ? 'ring-2 ring-white' : ''
                    }`}
                    style={{ backgroundColor: neonColor.value }}
                    title={neonColor.name}
                  />
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                <Lightbulb className="w-4 h-4" /> Glow Intensity
              </label>
              <input
                type="range"
                min="1"
                max="8"
                value={intensity}
                onChange={(e) => setIntensity(Number(e.target.value))}
                className="w-full"
              />
            </div>
          </div>

          {/* Preview */}
          <div className="bg-gray-800 p-6 rounded-xl flex items-center justify-center min-h-[300px]">
            <div 
              className="text-center transition-all duration-300"
              style={{
                color: color,
                textShadow: `
                  0 0 ${intensity * 2}px ${color},
                  0 0 ${intensity * 4}px ${color},
                  0 0 ${intensity * 6}px ${color},
                  0 0 ${intensity * 8}px ${color}
                `,
                fontSize: '3rem',
                fontFamily: "'Dancing Script', cursive",
              }}
            >
              {text || 'Type something...'}
            </div>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-gray-800 p-6 rounded-xl">
            <h3 className="font-bold text-xl mb-2">Custom Design</h3>
            <p className="text-gray-400">Create your perfect neon sign with our easy-to-use customizer.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl">
            <h3 className="font-bold text-xl mb-2">Real-time Preview</h3>
            <p className="text-gray-400">See exactly how your neon sign will look as you make changes.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl">
            <h3 className="font-bold text-xl mb-2">Multiple Colors</h3>
            <p className="text-gray-400">Choose from a variety of vibrant neon colors to match your style.</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;