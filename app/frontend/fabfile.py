from fabric.api import local

# doesn't work right now. maybe the paths?
def webpack():
    local('rm -rf static/bundles/prod/*')
    local('webpack --config webpack.prod.config.js --progress --colors')
