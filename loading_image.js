async function onLoad() {
    await new Promise(resolve => setTimeout(resolve, 5000))
    location.replace("dashboard.html")
}

window.onload = onLoad
