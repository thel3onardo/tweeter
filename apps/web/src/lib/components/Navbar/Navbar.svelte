<script lang="ts">
    import { page } from '$app/stores';
    import { onMount } from 'svelte';
    import type { TNavItems } from "./types";
    
    const navItems: TNavItems[] = [
        { id: 1, label: 'Home', route: '/' },
        { id: 2, label: 'Explore', route: '/explore' },
        { id: 3, label: 'Bookmarks', route: '/bookmarks' },
    ]
</script>


<div class="flex items-center justify-between w-full bg-white font-poppins md:px-20">
    <div>
        <img src="/images/tweeter.svg" alt="Tweeter's logo">
    </div>

    <nav class="flex font-medium">
        {#each navItems as item}
            <a href={item.route} class="p-4 mx-6 no-underline unstyled {$page?.url.pathname === item.route ? 'text-primary-500 font-semibold border-b-2 border-primary-500' : 'text-surface-300 font-medium'}">{ item.label }</a>
        {/each}
    </nav>

    <a href="/login" class="btn btn-filled-primary btn-base px-9 py-1.5 font-poppins font-medium" data-sveltekit-preload-data="hover">Login</a>
</div>