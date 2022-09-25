import React, { useState, useEffect } from 'react'
import { render } from 'react-dom'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import wordCloud from "highcharts/modules/wordcloud.js";
import Axios from 'axios'

wordCloud(Highcharts);
// Load a module
const Test = () => {
  const [artist, setArtist] = useState([])
  useEffect(() => { 
    Axios.get('http://localhost:3002/')
      .then(function (response) {
      // handle success
      setArtist(response.data, {});
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
      // always executed
      });
  }, [])

  
  const options = {
  title: {
    text: 'Artist'
  },
  series: [{
        type: "wordcloud",
        data: artist
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
