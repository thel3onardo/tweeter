<script lang="ts">
    import Icon from "@iconify/svelte";
    import { fade } from "svelte/transition"

    const profilePic = `https://i1.sndcdn.com/avatars-0QCRofC3yRV0mkpa-6XQLMA-t500x500.jpg`
    let editMode = false

    function toggleEditMode(): void {
        editMode = !editMode
    }
</script>

<div class="h-[152px] w-[152px] rounded-lg p-1 bg-white -translate-y-14 mr-7">
    <div class='w-full h-full relative rounded-lg cursor-pointer overflow-hidden select-none' on:mouseenter={toggleEditMode} on:mouseleave={toggleEditMode}>
        <img src={profilePic} alt="testing">
        {#if editMode}
        <div transition:fade="{{ duration: 250 }}" class="flex justify-center items-center w-full h-full absolute top-0 bg-black/40">
            <Icon icon="material-symbols:edit" class="text-white text-3xl" />
        </div>
        {/if}
    </div>
</div>