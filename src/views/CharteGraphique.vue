<script setup lang="ts">

</script>

<template>
  <body class="bg-gray-50">
  <div class="max-w-7xl mx-auto px-4 py-12">
    <div class="text-center mb-12">
      <h1 class="text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent mb-4">
        PhotoShare Design System
      </h1>
      <p class="text-gray-600 text-lg">Charte graphique complète pour votre application</p>
    </div>

    <!-- Palette de couleurs -->
    <section class="bg-white rounded-2xl shadow-lg p-8 mb-8">
      <h2 class="text-3xl font-bold text-gray-800 mb-6">🎨 Palette de Couleurs</h2>

      <div class="mb-8">
        <h3 class="text-xl font-semibold text-gray-700 mb-4">Couleurs Principales</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <div class="color-box bg-gradient-to-r from-purple-600 to-purple-700">
              Primary Purple
            </div>
            <p class="mt-2 text-sm text-gray-600">#9333EA (purple-600)</p>
            <p class="text-xs text-gray-500">Actions principales, liens</p>
          </div>
          <div>
            <div class="color-box bg-gradient-to-r from-pink-600 to-pink-700">
              Accent Pink
            </div>
            <p class="mt-2 text-sm text-gray-600">#DB2777 (pink-600)</p>
            <p class="text-xs text-gray-500">Éléments interactifs, highlights</p>
          </div>
          <div>
            <div class="color-box bg-gradient-to-r from-red-500 to-red-600">
              Secondary Red
            </div>
            <p class="mt-2 text-sm text-gray-600">#EF4444 (red-500)</p>
            <p class="text-xs text-gray-500">Alertes, suppressions</p>
          </div>
        </div>
      </div>

      <div class="mb-8">
        <h3 class="text-xl font-semibold text-gray-700 mb-4">Couleurs Neutres</h3>
        <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div>
            <div class="color-box bg-gray-900">Gray 900</div>
            <p class="mt-2 text-sm text-gray-600">#111827</p>
          </div>
          <div>
            <div class="color-box bg-gray-700">Gray 700</div>
            <p class="mt-2 text-sm text-gray-600">#374151</p>
          </div>
          <div>
            <div class="color-box bg-gray-500">Gray 500</div>
            <p class="mt-2 text-sm text-gray-600">#6B7280</p>
          </div>
          <div>
            <div class="color-box bg-gray-300 !text-gray-700">Gray 300</div>
            <p class="mt-2 text-sm text-gray-600">#D1D5DB</p>
          </div>
          <div>
            <div class="color-box bg-gray-100 !text-gray-700">Gray 100</div>
            <p class="mt-2 text-sm text-gray-600">#F3F4F6</p>
          </div>
        </div>
      </div>

      <div>
        <h3 class="text-xl font-semibold text-gray-700 mb-4">Couleurs Feedback</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <div class="color-box bg-green-500">Success</div>
            <p class="mt-2 text-sm text-gray-600">#10B981 (green-500)</p>
          </div>
          <div>
            <div class="color-box bg-yellow-500">Warning</div>
            <p class="mt-2 text-sm text-gray-600">#F59E0B (yellow-500)</p>
          </div>
          <div>
            <div class="color-box bg-blue-500">Info</div>
            <p class="mt-2 text-sm text-gray-600">#3B82F6 (blue-500)</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Typographie -->
    <section class="bg-white rounded-2xl shadow-lg p-8 mb-8">
      <h2 class="text-3xl font-bold text-gray-800 mb-6">✍️ Typographie</h2>

      <div class="space-y-6">
        <div>
          <h1 class="text-5xl font-bold text-gray-900 mb-2">Heading 1</h1>
          <code class="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded">text-5xl font-bold</code>
        </div>
        <div>
          <h2 class="text-4xl font-bold text-gray-900 mb-2">Heading 2</h2>
          <code class="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded">text-4xl font-bold</code>
        </div>
        <div>
          <h3 class="text-3xl font-semibold text-gray-900 mb-2">Heading 3</h3>
          <code class="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded">text-3xl font-semibold</code>
        </div>
        <div>
          <h4 class="text-2xl font-semibold text-gray-900 mb-2">Heading 4</h4>
          <code class="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded">text-2xl font-semibold</code>
        </div>
        <div>
          <p class="text-lg text-gray-700 mb-2">Body Large - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <code class="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded">text-lg text-gray-700</code>
        </div>
        <div>
          <p class="text-base text-gray-700 mb-2">Body Regular - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <code class="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded">text-base text-gray-700</code>
        </div>
        <div>
          <p class="text-sm text-gray-600 mb-2">Body Small - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <code class="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded">text-sm text-gray-600</code>
        </div>
      </div>
    </section>

    <!-- Boutons -->
    <section class="bg-white rounded-2xl shadow-lg p-8 mb-8">
      <h2 class="text-3xl font-bold text-gray-800 mb-6">🔘 Boutons</h2>

      <div class="space-y-6">
        <div>
          <h3 class="text-lg font-semibold text-gray-700 mb-3">Boutons Principaux</h3>
          <div class="flex flex-wrap gap-4">
            <button class="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg hover:shadow-xl">
              Primary Button
            </button>
            <button class="bg-white text-purple-600 border-2 border-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-all">
              Secondary Button
            </button>
            <button class="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all">
              Tertiary Button
            </button>
          </div>
        </div>

        <div>
          <h3 class="text-lg font-semibold text-gray-700 mb-3">Tailles</h3>
          <div class="flex flex-wrap items-center gap-4">
            <button class="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1.5 rounded text-sm font-semibold">
              Small
            </button>
            <button class="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-5 py-2.5 rounded-lg font-semibold">
              Medium
            </button>
            <button class="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg text-lg font-semibold">
              Large
            </button>
          </div>
        </div>

        <div>
          <h3 class="text-lg font-semibold text-gray-700 mb-3">États</h3>
          <div class="flex flex-wrap gap-4">
            <button class="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all">
              Normal
            </button>
            <button class="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold opacity-50 cursor-not-allowed">
              Disabled
            </button>
            <button class="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2">
              <svg class="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Loading
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Cartes -->
    <section class="bg-white rounded-2xl shadow-lg p-8 mb-8">
      <h2 class="text-3xl font-bold text-gray-800 mb-6">🃏 Cartes</h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
          <h3 class="text-xl font-semibold text-gray-800 mb-2">Carte Simple</h3>
          <p class="text-gray-600">Bordure fine, ombre au hover</p>
          <code class="text-xs text-gray-500 block mt-3">border rounded-xl hover:shadow-lg</code>
        </div>

        <div class="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition-shadow">
          <h3 class="text-xl font-semibold text-gray-800 mb-2">Carte Élevée</h3>
          <p class="text-gray-600">Ombre constante, effet au hover</p>
          <code class="text-xs text-gray-500 block mt-3">shadow-md hover:shadow-xl</code>
        </div>

        <div class="bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl p-6 text-white shadow-lg">
          <h3 class="text-xl font-semibold mb-2">Carte Gradient</h3>
          <p>Pour les éléments premium ou importants</p>
          <code class="text-xs opacity-75 block mt-3">bg-gradient-to-br from-purple-600</code>
        </div>
      </div>
    </section>

    <!-- Inputs -->
    <section class="bg-white rounded-2xl shadow-lg p-8 mb-8">
      <h2 class="text-3xl font-bold text-gray-800 mb-6">📝 Champs de Formulaire</h2>

      <div class="space-y-6 max-w-md">
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-2">Input Standard</label>
          <input type="text" placeholder="Entrez votre texte"
                 class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all">
        </div>

        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-2">Input avec Erreur</label>
          <input type="text" placeholder="Entrez votre texte"
                 class="w-full px-4 py-3 border-2 border-red-500 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none">
          <p class="text-sm text-red-500 mt-1">Ce champ est requis</p>
        </div>

        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-2">Textarea</label>
          <textarea placeholder="Votre message" rows="4"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all resize-none"></textarea>
        </div>
      </div>
    </section>

    <!-- Badges & Tags -->
    <section class="bg-white rounded-2xl shadow-lg p-8 mb-8">
      <h2 class="text-3xl font-bold text-gray-800 mb-6">🏷️ Badges & Tags</h2>

      <div class="flex flex-wrap gap-3">
        <span class="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-semibold">Purple Badge</span>
        <span class="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-semibold">Pink Badge</span>
        <span class="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">Success</span>
        <span class="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-semibold">Warning</span>
        <span class="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-semibold">Error</span>
        <span class="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">Premium</span>
      </div>
    </section>

    <!-- Espacement -->
    <section class="bg-white rounded-2xl shadow-lg p-8">
      <h2 class="text-3xl font-bold text-gray-800 mb-6">📏 Espacements Standards</h2>

      <div class="space-y-4">
        <div class="flex items-center gap-4">
          <div class="w-32 text-sm font-semibold text-gray-700">Extra Small</div>
          <div class="h-2 bg-purple-600" style="width: 8px;"></div>
          <code class="text-sm text-gray-600">2px (p-0.5, m-0.5)</code>
        </div>
        <div class="flex items-center gap-4">
          <div class="w-32 text-sm font-semibold text-gray-700">Small</div>
          <div class="h-2 bg-purple-600" style="width: 16px;"></div>
          <code class="text-sm text-gray-600">16px (p-4, m-4)</code>
        </div>
        <div class="flex items-center gap-4">
          <div class="w-32 text-sm font-semibold text-gray-700">Medium</div>
          <div class="h-2 bg-purple-600" style="width: 24px;"></div>
          <code class="text-sm text-gray-600">24px (p-6, m-6)</code>
        </div>
        <div class="flex items-center gap-4">
          <div class="w-32 text-sm font-semibold text-gray-700">Large</div>
          <div class="h-2 bg-purple-600" style="width: 32px;"></div>
          <code class="text-sm text-gray-600">32px (p-8, m-8)</code>
        </div>
        <div class="flex items-center gap-4">
          <div class="w-32 text-sm font-semibold text-gray-700">Extra Large</div>
          <div class="h-2 bg-purple-600" style="width: 48px;"></div>
          <code class="text-sm text-gray-600">48px (p-12, m-12)</code>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <div class="mt-12 text-center text-gray-600">
      <p class="text-sm">PhotoShare Design System • Prêt à l'emploi avec Tailwind CSS</p>
    </div>
  </div>
  </body>
</template>

<style scoped>
.color-box {
  width: 100%;
  height: 80px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: white;
  text-shadow: 0 1px 2px rgba(0,0,0,0.3);
}
</style>
