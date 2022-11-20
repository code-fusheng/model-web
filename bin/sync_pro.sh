#!/bin/bash
#密码:Tx!code-fusheng
rsync -avz -e 'ssh -p 22221' --progress ./model-web/ root@42.192.222.62:/usr/share/nginx/model-web