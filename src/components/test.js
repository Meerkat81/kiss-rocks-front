import React from 'react'
import { render } from 'react-dom'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import wordCloud from "highcharts/modules/wordcloud.js";
wordCloud(Highcharts);
// Load a module
const Test = () => {
  
  const data = [{"name":"Alien Ant Farm","weight":1},{"name":"Megadeth","weight":1},{"name":"Nirvana","weight":6},{"name":"Incubus","weight":1},{"name":"Blink 182","weight":1},{"name":"Lenny Kravitz","weight":1},{"name":"3 Doors Down","weight":1},{"name":"Seven Mary Three","weight":1},{"name":"Sublime","weight":2},{"name":"Nickelback","weight":1},{"name":"White Stripes","weight":1},{"name":"Radiohead","weight":1},{"name":"Live","weight":1},{"name":"Smashing Pumpkins","weight":1},{"name":"Rage Against The Machine","weight":1},{"name":"Evanescence","weight":1},{"name":"Static-X","weight":1},{"name":"Soundgarden","weight":2},{"name":"Iron Maiden","weight":1},{"name":"Audioslave","weight":1},{"name":"Stone Temple Pilots","weight":4},{"name":"Jimmy Eat World","weight":1},{"name":"Nine Inch Nails","weight":1},{"name":"Chevelle","weight":2},{"name":"311","weight":1},{"name":"Creed","weight":2},{"name":"Everclear","weight":1},{"name":"Metallica","weight":2},{"name":"Black Label Society","weight":1},{"name":"Theory of a Deadman","weight":1},{"name":"Alice in Chains","weight":2},{"name":"Dio","weight":1},{"name":"Linkin Park","weight":5},{"name":"Local H","weight":1},{"name":"Staind","weight":1},{"name":"Three Days Grace","weight":1},{"name":"Silverchair","weight":1},{"name":"Butthole Surfers","weight":1},{"name":"Bush","weight":2},{"name":"Green Day","weight":2},{"name":"White Zombie","weight":1},{"name":"Red Hot Chili Peppers","weight":4},{"name":"Stabbing Westward","weight":1},{"name":"Tool","weight":2},{"name":"Seether","weight":1},{"name":"Cracker","weight":1},{"name":"Union Underground","weight":1},{"name":"Franz Ferdinand","weight":1},{"name":"Rob Zombie","weight":1},{"name":"System Of A Down","weight":1},{"name":"Offspring","weight":3},{"name":"Candlebox","weight":1},{"name":"Foo Fighters","weight":2}]  
  const options = {
  title: {
    text: 'Artist'
  },
  series: [{
        type: "wordcloud",
        data: data
      }]
  };



  return(
    <HighchartsReact
    highcharts={Highcharts}
    options={options}
    constructorType = {'chart'}
    />
  )
}
export default Test
