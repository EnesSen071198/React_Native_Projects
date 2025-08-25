import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer 1_PTI_AUqL-Wn5iCh8yNsUByDE0K3CwTr6ygAwjC38avl0DRYgngtE-gr0iyHdPbtz74Lsj3bUNzLfrVVUZTaoglsSBPV-eu7CUFOBaUQjKEevCa1Csu5jx3bOcMZ3Yx"
  }
});
