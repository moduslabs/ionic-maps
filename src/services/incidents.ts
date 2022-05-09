import type { GoogleMap } from '@capacitor/google-maps';

const DEMO = {
  incidents: [
    {
      type: 'Feature',
      properties: { iconCategory: 8 },
      geometry: {
        type: 'LineString',
        coordinates: [
          [4.8851555178, 52.3723384836],
          [4.8853030393, 52.3738539707],
          [4.8853084037, 52.3739183451],
          [4.8853204737, 52.3740417206],
          [4.8853312025, 52.3740873147],
          [4.8853446135, 52.3742629872],
          [4.8853687534, 52.3743729548],
          [4.8853902111, 52.3744091842],
          [4.8854586074, 52.3744923377],
          [4.886133183, 52.3752138477],
        ],
      },
    },
    {
      type: 'Feature',
      properties: { iconCategory: 14 },
      geometry: {
        type: 'LineString',
        coordinates: [
          [4.8873053083, 52.3722486223],
          [4.8874353955, 52.3733309378],
        ],
      },
    },
    {
      type: 'Feature',
      properties: { iconCategory: 9 },
      geometry: {
        type: 'LineString',
        coordinates: [
          [4.8819046805, 52.3736501006],
          [4.8826355824, 52.3738338089],
          [4.8827924917, 52.3738740813],
          [4.8829158733, 52.3739062685],
          [4.8829775641, 52.373921006],
          [4.8830365727, 52.3739357436],
          [4.883091558, 52.3739464897],
          [4.8831881175, 52.3739666003],
          [4.8833316157, 52.3739934144],
          [4.8834321985, 52.3739974569],
          [4.8835596034, 52.3739987874],
          [4.8838908563, 52.3739987874],
          [4.8840906808, 52.3739974569],
          [4.8842154036, 52.3739961265],
          [4.8843387852, 52.3739920839],
          [4.8843964527, 52.3739894229],
          [4.8847236822, 52.3739733038],
          [4.8849168012, 52.3739625577],
          [4.8850079963, 52.3739585663],
          [4.8850978503, 52.3739505323],
          [4.8851729522, 52.3739397862],
          [4.8853084037, 52.3739183451],
          [4.8853861878, 52.3739062685],
          [4.8854559252, 52.3738901493],
          [4.8855001817, 52.3738767422],
          [4.8855806479, 52.3738432245],
          [4.8858475277, 52.3737225094],
          [4.8862203548, 52.3735468348],
          [4.8863088677, 52.3735119864],
          [4.8864094505, 52.3734811293],
          [4.8865086923, 52.3734529333],
          [4.8867179046, 52.3734046776],
          [4.8869043181, 52.373369829],
          [4.8870813439, 52.3733631254],
          [4.887313355, 52.3733429634],
          [4.8874353955, 52.3733309378],
        ],
      },
    },
    {
      type: 'Feature',
      properties: { iconCategory: 3 },
      geometry: {
        type: 'LineString',
        coordinates: [
          [4.8891976068, 52.3732947075],
          [4.8890246043, 52.3733040721],
          [4.8888341675, 52.3733148184],
          [4.8886973748, 52.3733228525],
          [4.88854583, 52.3733349292],
          [4.8874434421, 52.3734368651],
          [4.8873187194, 52.3734435687],
          [4.8871054838, 52.37346501],
          [4.8869995365, 52.3734717136],
          [4.8869217525, 52.3734784172],
          [4.8866803536, 52.373526724],
          [4.8863906751, 52.3736112097],
          [4.8862914333, 52.3736514311],
          [4.8861895094, 52.3736876611],
          [4.8854934761, 52.3739813378],
          [4.8853204737, 52.3740417206],
        ],
      },
    },
    {
      type: 'Feature',
      properties: { iconCategory: 2 },
      geometry: {
        type: 'LineString',
        coordinates: [
          [4.8905963788, 52.371663905],
          [4.8902865837, 52.371635759],
          [4.8897166142, 52.3715780851],
          [4.8893679271, 52.3715365312],
        ],
      },
    },
  ],
};

export const categories = new Map([
  [0, 'Unknown'],
  [1, 'Accident'],
  [2, 'Fog'],
  [3, 'DangerousConditions'],
  [4, 'Rain'],
  [5, 'Ice'],
  [6, 'Jam'],
  [7, 'LaneClosed'],
  [8, 'RoadClosed'],
  [9, 'RoadWorks'],
  [10, 'Wind'],
  [11, 'Flooding'],
  [14, 'BrokenDownVehicle'],
]);

export const categoryLabels = new Map([
  ['Unknown', 'Unknown incident'],
  ['Accident', 'Car accident'],
  ['Fog', 'Fog, visibility is reduced'],
  ['DangerousConditions', 'Dangerous conditions'],
  ['Rain', 'Rain, visibility is reduced'],
  ['Ice', 'Ice, slippery road'],
  ['Jam', 'Traffic jam'],
  ['LaneClosed', 'Lane closed'],
  ['RoadClosed', 'Road closed'],
  ['RoadWorks', 'Road works'],
  ['Wind', 'Wind, large vehicles should avoid the area'],
  ['Flooding', 'Flooding'],
  ['BrokenDownVehicle', 'Broken down vehicle'],
]);

export const icons = new Map([
  ['Unknown', '⚠️'],
  ['Accident', '💥'],
  ['Fog', '😶‍🌫️'],
  ['DangerousConditions', '🚗'],
  ['Rain', '🌧'],
  ['Ice', '❄️'],
  ['Jam', '🚦'],
  ['LaneClosed', '🚧'],
  ['RoadClosed', '⛔️'],
  ['RoadWorks', '👷‍♂️'],
  ['Wind', '💨'],
  ['Flooding', '🌊'],
  ['BrokenDownVehicle', '🛠'],
]);

export const images = new Map([
  ['Unknown', 'warning'],
  ['Accident', 'collision'],
  ['Fog', 'fog'],
  ['DangerousConditions', 'automobile'],
  ['Rain', 'rain'],
  ['Ice', 'snowflake'],
  ['Jam', 'vertical-traffic-light'],
  ['LaneClosed', 'construction'],
  ['RoadClosed', 'no-entry'],
  ['RoadWorks', 'construction-worker'],
  ['Wind', 'wind'],
  ['Flooding', 'wave'],
  ['BrokenDownVehicle', 'hammer-and-wrench'],
]);

const getIconUrl = (category: string) =>
  `https://res.cloudinary.com/modus-labs/image/upload/c_scale,w_32/v1651503113/ionic-maps/${images.get(
    category
  )}.png`;

export function addIncidentsToMap(map: GoogleMap, incidents = DEMO) {
  return incidents.incidents.map((incident) => {
    const [lng, lat] = incident.geometry.coordinates[0];
    const category = categories.get(incident.properties.iconCategory);
    return map.addMarker({
      coordinate: { lat, lng },
      title: category,
      snippet: 'Watch for this incident!',
      iconUrl: getIconUrl(category!),
    });
  });
}
