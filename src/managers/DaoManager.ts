import { DaoFormacao } from "../DAOs/DaoFormacao";
import { DaoInscricao } from "../DAOs/DaoInscricao";
import { DaoParticipante } from "../DAOs/DaoParticipante";

export class DaoManager {
  /**
   * name
   */
  public getDaoFormacao(): DaoFormacao {
    return new DaoFormacao();
  }
  public getDaoInscricao(): DaoInscricao {
    return new DaoInscricao();
  }
  public getDaoParticipante(): DaoParticipante {
    return new DaoParticipante();
  }
}
