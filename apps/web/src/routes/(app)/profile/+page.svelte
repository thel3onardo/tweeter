<script lang="ts">
    import FollowButton from '$lib/components/Buttons/FollowButton.svelte';
import ProfilePicture from '$lib/components/Profile/ProfilePicture.svelte';
    import Icon from '@iconify/svelte';

    const capePic = `https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77700122185.jpg`
    const description = 'Photographer & Filmmaker based in Brazil'
    const following = '2322'
    const followers = '150'
</script>

<svelte:head>
    <title>thel3onardo profile</title>
</svelte:head>

<div class="w-full bg-center bg-cover min-h-[367px] flex items-end justify-center" style="background-image: url({capePic})">
    <div class="w-full max-w-[1073px] flex justify-between bg-white rounded-xl shadow-sm px-6 translate-y-12">
        <div class="flex">
            <ProfilePicture />
            <div class="flex flex-col mt-6">
                <div class="flex items-center">
                    <h1 class="font-semibold text-2xl text-surface-800 font-poppins">Daniel Jensen</h1>
                    <div class="flex text-xs text-surface-300 font-medium font-poppins ml-7">
                        <p class="unstyled mr-6"><span class="text-surface-800 font-semibold mr-0.5">{ following }</span>Following</p>
                        <p class="unstyled"><span class="text-surface-800 font-semibold mr-0.5">{ followers }</span>Followers</p>
                    </div>
                </div>
                <p class="text-lg text-surface-300 font-medium font-noto mt-[22px] unstyled">{description}</p>
            </div>
        </div>
        <div class="pt-6">
            <FollowButton />
        </div>
    </div>
</div>