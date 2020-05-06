import { csv } from 'd3-fetch';
import { loadModules } from 'esri-loader';

const l = (x) => console.log(x);

csv(
  'https://raw.githubusercontent.com/descarteslabs/DL-COVID-19/master/DL-us-m50.csv'
)
  .then((data) => {
    const filteredData = data.filter((obj) => obj.admin_level == 2);
    l(filteredData);
  })
  .catch((error) => console.error(error));
