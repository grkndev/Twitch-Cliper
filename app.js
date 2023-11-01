import axios from "axios";
const token = "fzcuigdhwyqmd3rsvb2onph11h334q"
const client_id = "v6ohqfkvqli7puf7zfrib670q7fxay", client_secret = ""

getClip("https://clips.twitch.tv/SuaveDependableLettuceFreakinStinkin-RTs_65MzhbRLFa-6")
async function getClip(clipURL) {

    let clipId = '';
    if (clipURL.includes("https://clips.twitch.tv/")) {
        clipId = clipURL.replace("https://clips.twitch.tv/", "");
    } else if (clipURL.includes("https://www.twitch.tv/") && clipURL.includes("/clip/")) {
        clipId = clipURL.replace("https://www.twitch.tv/", "");
    }

    let res = await axios.get("https://api.twitch.tv/helix/clips?id=" + clipId, {
        headers: {
            "Authorization": `Bearer ${token}`,
            "Client-Id": client_id
        }
    })
    console.log("Response Data: ", res.data)
    let VideoURL = res.data.data[0].thumbnail_url.replace(/-preview.*$/, '.mp4');

    console.log("Video URL: ", VideoURL)
}

async function getToken() {
    let res = await axios.post(`https://id.twitch.tv/oauth2/token?client_id=${client_id}&client_secret=${client_secret}&grant_type=client_credentials`)
    console.log(res.data)
}
