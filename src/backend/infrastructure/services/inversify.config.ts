import { Container } from "inversify";
import { applicationServiceRegistration } from "../../application/applicationServiceRegistration";
import { infrastructureServiceRegistration } from "../infrastructureServiceRegistration";

const container = new Container();

infrastructureServiceRegistration(container);
applicationServiceRegistration(container);

export { container };
