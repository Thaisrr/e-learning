import {Role} from './role';
import {Skills} from './skills';

export class User {
  id: number;
  name: string;
  firstname: string;
  pseudo: string;
  mail: string;
  phone: string;
  idPoleEmploi: string;
  motivation: string;
  password: string;
  tokken: string;
  role: Role;
  skills: Skills[] = [];


  createUser(firstname: string, pseudo: string, mail: string, idPoleEmploi: string, password: string) {
    this.firstname = firstname;
    this.pseudo = pseudo;
    this.mail = mail;
    this.idPoleEmploi = idPoleEmploi;
    this.password = password;
    this.role = Role.USER;
  }

  createTrainer(name: string, firstname: string, pseudo: string, mail: string, phone: string, motivation: string, password: string) {
    this.name = name;
    this.firstname = firstname;
    this.pseudo = pseudo;
    this.mail = mail;
    this.phone = phone;
    this.motivation = motivation;
    this.password = password;
    this.role = Role.TRAINER;
  }
}
