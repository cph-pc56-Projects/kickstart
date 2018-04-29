import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xB994Cf1a575E8FC32Fd5aa89630F7846ebbCc371'
);

export default instance;
