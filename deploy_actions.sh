#!/usr/bin/env bash

set -e
# set -x

git config --global user.email ${GIT_EMAIL}
git config --global user.name ${GIT_NAME}
git config --global init.defaultBranch master
# git clone --depth=1 https://${GIT_ACCESS_TOKEN}@${GIT_LAB}/${GIT_NAME}/${GIT_REPO}.git
git clone --depth=1 https://${GIT_ACCESS_TOKEN}@${GIT_LAB}/${GIT_NAME}/private_repos.git -b docusaurus_docs ${GIT_REPO}

cd ${GIT_REPO} && \
chmod +x ../docs.sh && \
../docs.sh 0.3 ./docs ./blog ./src && \
pnpm install --silent && \
pnpm run build && \
cd build

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy' --signoff > /dev/null

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

# 如果使用 travis 持续集成
git push -f https://${GIT_ACCESS_TOKEN}@github.com/user00000001/deploy_docusaurus_docs.git master:gh-pages

set +e
# set +x

exit 0
