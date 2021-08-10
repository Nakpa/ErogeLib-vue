FROM nginx

RUN echo 'erogeLib开始构建镜像' > /var/nginx/erogelib/static/index.html

RUN rm -rf /var/nginx/erogelib/static/

RUN mkdir /var/nginx/erogelib/static

MAINTAINER Nakpa

# 将dist文件中的内容复制到 /usr/share/nginx/html/ 这个目录下面
COPY dist/  /var/nginx/erogelib/static/
