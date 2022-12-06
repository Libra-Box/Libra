# Note: when updating the go minor version here, also update the go-channel in snap/snapcraft.yml
FROM ubuntu:20.04
LABEL maintainer="Libra <litai686@qq.com>"
ADD ./cmd/ipfs/ipfs /usr/local/bin
ENV IPFS_PATH=/root/.ipfs