export interface ProductPerson {
  idProduct:     number;
  fechaCreacion: string;
  random:        number;
  randomFloat:   number;
  bool:          boolean;
  date:          string;
  regEx:         string;
  enumValue:     string;
  elts:          string[];
  person:        Person;
}

export interface Person {
  id:         number;
  product:    null;
  firstName:  string;
  lastName:   string;
  city:       string;
  country:    string;
  firstName2: string;
  lastName2:  string;
  email:      string;
}

