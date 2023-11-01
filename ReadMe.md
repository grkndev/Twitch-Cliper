# Informations
Take your informations and Fill the blanks
Twitch Developers Portal --> https://dev.twitch.tv/

```js
const token = "YOUR TOKEN", client_id = "YOUR CLIENT ID", client_secret = "YOUR SECRET"
```

### And runs `getToken()` functions to take Token

## You r Ready! run getClip(ClipURL) method

# Functions

` getClip(ClipURL) `
- Return Clip Data and Video Link

` getToken() `
- Returns your Client Token information


# Example Request
```js
  let res = await axios.get("https://api.twitch.tv/helix/clips?id=" + clipId, {
        headers: {
            "Authorization": `Bearer ${token}`,
            "Client-Id": client_id
        }
    })
    console.log("Responsed Data: ", res.data)
```
<hr />

# Example Response
```js
  {
  data: [
    {
      id: 'SuaveDependableLettuceFreakinStinkin-RTs_65MzhbRLFa-6',
      url: 'https://clips.twitch.tv/SuaveDependableLettuceFreakinStinkin-RTs_65MzhbRLFa-6',
      embed_url: 'https://clips.twitch.tv/embed?clip=SuaveDependableLettuceFreakinStinkin-RTs_65MzhbRLFa-6',
      broadcaster_id: '508333532',
      broadcaster_name: 'sailortori',
      creator_id: '508333532',
      creator_name: 'sailortori',
      video_id: '1964202454',
      game_id: '511224',
      language: 'en',
      title: 'MY HEART',
      view_count: 80,
      created_at: '2023-10-31T01:09:25Z',
      thumbnail_url: 'https://clips-media-assets2.twitch.tv/oWNMUkU7P-uTM4W0SxWvug/AT-cm%7CoWNMUkU7P-uTM4W0SxWvug-preview-480x272.jpg', 
      duration: 29,
      vod_offset: 8904,
      is_featured: true
    }
  ],
  pagination: {}
}
```
