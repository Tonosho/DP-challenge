const api = {
  getBallotData() {
    return fetch('/api/getBallotData').then(res => {
      return res.json();
    });
  }
  
};
console.log(res.json());
export default api;