FROM nginx

RUN rm -rf /var/nginx/erogelib/static/

RUN mkdir -p /var/nginx/erogelib/static

RUN echo 'erogeLib开始构建镜像'

MAINTAINER Nakpa

# 将dist文件中的内容复制到 /usr/share/nginx/html/ 这个目录下面
COPY dist/  /var/nginx/erogelib/static/

RUN echo 'erogeLib镜像构建结束'
