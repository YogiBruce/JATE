const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
    console.log('hit')
    console.log('event' + event)
    event.preventDefault();

    //Store triggered event
    window.deferredPrompt = event;

    //Remove hidden class from button
    butInstall.classList.toggle('hidden', false);
});

butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
        return
    }
    //Show prompt
    promptEvent.prompt();

    //Reset deferred prompt
    window.defferedPrompt = null;

    butInstall.classList.toggle('hidden', true)
});

window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null
});
