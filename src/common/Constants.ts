class Constants {
    public INPUT = 'Search by Locality/Area';
    public SECURITY = 'Security';
    public HYGIENE = 'Cleanliness and Hygiene';
    public DIRECTIONS = 'Get directions';

    public API_BASE_URL = window.location.href;
    public API_TIMEOUT = 1000;
    public ERROR_MESSAGE = 'Something went wrong!';
    public BUTTON_TEXT = {
        report: 'Report New',
        show: 'Show more +',
    };
    public AMENITIES = {
        soap: 'Soap Dispenser',
        wash: 'Washbasin',
        lock: 'Lock on doors',
        faucet: 'Faucet for Washing',
        light: 'Security Lights',
        window: 'Security Windows',
    };
}
export default new Constants();
