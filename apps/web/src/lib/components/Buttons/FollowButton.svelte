<script lang="ts">
    import Icon from "@iconify/svelte";

    let isFollow = true;

    function toggleFollowingState() : void {
        isFollow = !isFollow;
    }
</script>

<!-- <button class="btn btn-filled-primary btn-base">
    <Icon icon="mingcute:user-add-fill" class="text-sm" />
    <span class="text-xs font-medium">Follow</span>
</button> -->

<button class="btn btn-filled-primary btn-base border-2 border-filled-primary transition outline-none select-none {isFollow ? 'hover:text-red-500 hover:border-2 hover:border-red-500 hover:bg-transparent' : ''}" on:click={toggleFollowingState}>
    {#if !isFollow}
    <Icon icon="mingcute:user-add-fill" class="text-sm" />
    {/if}
    <span class="text-xs font-medium">{ isFollow ? 'Following' : 'Follow' }</span>
</button>