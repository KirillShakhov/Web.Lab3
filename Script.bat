scp -P 2222 target\lab3-1.0-SNAPSHOT.war s282927@helios.se.ifmo.ru:~/wildfly/standalone/deployments/
ssh -L 36310:localhost:36310 s282927@helios.se.ifmo.ru -p 2222
