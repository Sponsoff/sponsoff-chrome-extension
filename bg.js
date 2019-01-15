import * as tf from '@tensorflow/tfjs'
import jsonModel from './model/model.json'


function listenToTabs() {
  chrome.tabs.onUpdated.addListener(function () {
    chrome.tabs.query({
      active: true
    }, (tabs) => {
      console.log('model', model)
      const currentTab = tabs[0]
      if (currentTab) {
        const url = new URL(currentTab.url)
        if (url.hostname === 'www.youtube.com') {
          const video_id = url.searchParams.get('v')
          console.log('video_id', video_id)
        }
      }
    });
  })
}
