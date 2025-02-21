import axios from "axios";

export class APIManager {
  private apigee: string = "https://apigee.googleapis.com/v1";

  async emit(idParticipante: number, idFormacao: number, cargaHorariaParticipante: number): Promise<Int8Array> {
    try {
        let response = await axios.post(`${this.apigee}/emit/certificate`, {
            idParticipante: idParticipante,
            idFormacao: idFormacao,
            cargaHorariaParticipante: cargaHorariaParticipante
        }, {
          headers: {
            'Content-Type': 'text/plain'
          }
        });

        return new Int8Array(response.data);
    } catch (error) {
      console.error(error);
      return new Int8Array();
    }
  }
}

