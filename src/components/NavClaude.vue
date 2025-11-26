<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter, useRoute, RouterLink } from 'vue-router'
interface User {
  id: string,
  email: string,
  name: string,
  remember_token: string,
  created_at: string,
  updated_at: string,
}
interface Props {
  user?: User
}
const props = withDefaults(defineProps<Props>(), {
  user: () => ({
    name: 'John Doe',
    email: 'john@example.com'
  })
})
console.log(props.user)
const router = useRouter()
const route = useRoute()

// async function handleLogout() {
//   auth.logout(user)
//   await router.push('login')
// }

// État
const isMenuOpen = ref(false)
const isProfileOpen = ref(false)

// Méthodes
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  if (isMenuOpen.value) {
    isProfileOpen.value = false
  }
}

const toggleProfile = () => {
  isProfileOpen.value = !isProfileOpen.value
}

const closeMenus = () => {
  isMenuOpen.value = false
  isProfileOpen.value = false
}

const handleLogout = () => {
  // TODO: Implémenter la logique de déconnexion
  console.log('Logout')
  auth.logout(user)
  closeMenus()
}

const navigateTo = (path: string) => {
  router.push(path)
  closeMenus()
}

const isActive = (path: string): boolean => {
  return route.path === path
}

// Fermer les menus si clic en dehors
const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as HTMLElement
  if (!target.closest('.navbar-container')) {
    closeMenus()
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})

// Obtenir les initiales de l'utilisateur
const getUserInitials = (name: string): string => {
  return name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}
</script>

<template>
  <nav class="gradient-primary shadow-lg navbar-container">
    <div class="container-app">
      <div class="flex justify-between items-center h-16">
        <!-- Logo et nom -->
        <div class="flex items-center space-x-3 cursor-pointer" @click="navigateTo('/')">
          <div class="bg-white p-2 rounded-lg shadow-md hover-scale">
            <svg
              class="w-6 h-6 text-purple-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          <span class="text-white font-bold text-xl tracking-tight hidden sm:block">
            PhotoShare
          </span>
        </div>

        <!-- Navigation desktop -->
        <div class="hidden md:flex items-center space-x-1">
          <router-link
            to="/gallery"
            class="text-white hover:bg-white/20 px-4 py-2 rounded-lg transition-all duration-200 font-medium flex items-center space-x-2"
            :class="{ 'bg-white/20': isActive('/gallery') }"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span>Galerie</span>
          </router-link>

          <router-link
            to="/upload"
            class="text-white hover:bg-white/20 px-4 py-2 rounded-lg transition-all duration-200 font-medium flex items-center space-x-2"
            :class="{ 'bg-white/20': isActive('/upload') }"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
            <span>Upload</span>
          </router-link>
        </div>

        <!-- Profil utilisateur desktop -->
        <div class="hidden md:flex items-center space-x-4">
          <div class="relative">
            <button
              @click.stop="toggleProfile"
              class="flex items-center space-x-3 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-all duration-200"
            >
              <div class="avatar-sm">
                {{ getUserInitials(props.user.name) }}
              </div>
              <span class="text-white font-medium">{{ props.user.name }}</span>
              <svg
                class="w-4 h-4 text-white transition-transform"
                :class="{ 'rotate-180': isProfileOpen }"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <!-- Dropdown menu -->
            <transition name="fade">
              <div v-if="isProfileOpen" class="dropdown" @click.stop>
                <router-link to="/profile" class="dropdown-item" @click="closeMenus">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  <span>Mon profil</span>
                </router-link>

                <router-link to="/settings" class="dropdown-item" @click="closeMenus">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>Paramètres</span>
                </router-link>

                <div class="dropdown-divider"></div>

                <button @click="handleLogout" class="dropdown-item text-red-600 hover:bg-red-50 w-full">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                  <span>Déconnexion</span>
                </button>
              </div>
            </transition>
          </div>
        </div>

        <!-- Bouton menu mobile -->
        <div class="md:hidden">
          <button
            @click.stop="toggleMenu"
            class="text-white hover:bg-white/20 p-2 rounded-lg transition-all duration-200"
          >
            <svg
              v-if="!isMenuOpen"
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Menu mobile -->
    <transition name="slide">
      <div v-if="isMenuOpen" class="md:hidden bg-white/10 backdrop-blur-sm border-t border-white/20">
        <div class="container-app py-3 space-y-2">
          <!-- Info utilisateur mobile -->
          <div class="flex items-center space-x-3 px-4 py-3 bg-white/10 rounded-lg mb-4">
            <div class="avatar-md">
              {{ getUserInitials(props.user.name) }}
            </div>
            <div>
              <p class="text-white font-semibold">{{ props.user.name }}</p>
              <p class="text-white/75 text-sm">{{ props.user.email }}</p>
            </div>
          </div>

          <router-link
            to="/gallery"
            class="flex items-center space-x-3 text-white hover:bg-white/20 px-4 py-3 rounded-lg transition-all duration-200"
            :class="{ 'bg-white/20': isActive('/gallery') }"
            @click="closeMenus"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span class="font-medium">Galerie</span>
          </router-link>

          <router-link
            to="/upload"
            class="flex items-center space-x-3 text-white hover:bg-white/20 px-4 py-3 rounded-lg transition-all duration-200"
            :class="{ 'bg-white/20': isActive('/upload') }"
            @click="closeMenus"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
            <span class="font-medium">Upload</span>
          </router-link>

          <div class="border-t border-white/20 my-2"></div>

          <router-link
            to="/profile"
            class="flex items-center space-x-3 text-white hover:bg-white/20 px-4 py-3 rounded-lg transition-all duration-200"
            @click="closeMenus"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <span class="font-medium">Mon profil</span>
          </router-link>

          <router-link
            to="/settings"
            class="flex items-center space-x-3 text-white hover:bg-white/20 px-4 py-3 rounded-lg transition-all duration-200"
            @click="closeMenus"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span class="font-medium">Paramètres</span>
          </router-link>

          <button
            @click="handleLogout"
            class="flex items-center space-x-3 text-white hover:bg-white/20 px-4 py-3 rounded-lg transition-all duration-200 w-full"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            <span class="font-medium">Déconnexion</span>
          </button>
        </div>
      </div>
    </transition>
  </nav>
</template>

<style scoped>
/* Transitions pour les dropdowns et menus */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from {
  opacity: 0;
  transform: translateY(-20px);
}

.slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
