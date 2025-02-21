import { DaoFormacao } from "../DAOs/DaoFormacao";
import { DaoInscricao } from "../DAOs/DaoInscricao";

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
}
