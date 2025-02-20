import axios from "axios";

export class APIManager {
  private apigee: string = "https://apigee.googleapis.com/v1";

  emit(idParticipante: number, idFormacao: number, cargaHorariaParticipante: number): Int8Array {
    try {
        let response = axios.post(`${this.apigee}/emit/certificate`, {
            idParticipante: idParticipante,
            idFormacao: idFormacao,
            cargaHorariaParticipante: cargaHorariaParticipante
        }, {
          ContentType: 'text/plain'
        });

        return response.data;
    } catch (error) {
      console.error(error);
      return new Int8Array();
    }
  }
}

