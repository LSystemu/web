# web.


1. `sudo su`
2. `cd /docker` 
3. `rm -rf web` 
4. `git clone https://github.com/LSystemu/web.git` 
5. `docker stop website`
6. ` docker rm website` 
7. `docker build -t website .` 
8. `docker run -it -d -p 82:80 --name website website`
