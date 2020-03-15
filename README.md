Hyperledger Explorer是一个简单易用的开源工具，可以用于监视
区块链网络中的活动。Hyperledger Explorer支持Fabric、Iroha等
多种区块链，可以运行在MocOS和Ubuntu下。

![](http://blog.hubwiz.com/2020/03/14/fabric-explorer-cn/hyperledger-fabric-explorer-cn.png)

> Hyperledger Fabric区块链开发教程与工具：
>
>- [Fabric区块链Node.js开发详解](http://xc.hubwiz.com/course/5c95f916a8d86b7067ffebb8?affid=github7878) 
>- [Fabric区块链Java开发详解](http://xc.hubwiz.com/course/5c9b89f54898e59b7b63430a?affid=github7878) 
>- [Fabric区块链Golang开发详解](http://xc.hubwiz.com/course/5e256bed6831eec33c15d9c0?affid=github7878)
>- [Fabric区块链Windows一键安装工具](http://sc.hubwiz.com/codebag/byfn-win/?affid=github7878)

## 1.0 Hyperledger Explorer与Fabirc版本对应关系说明

Hyperledger Explorer和Fabric以及NodeJS之间的版本对应关系如下：

<table class="table">
<thead>
<tr>
<th>Hyperledger Explorer Version</th>
<th>Fabric Version Supported</th>
<th>NodeJS Version Supported</th>
</tr>
</thead>
<tbody>
<tr>
<td><b><a href="/hyperledger/blockchain-explorer/blob/master/release_notes/v1.0.0-rc2.md">v1.0.0-rc2</a></b> (Dec 10, 2019)</td>
<td><a href="https://hyperledger-fabric.readthedocs.io/en/release-1.4" rel="nofollow">v1.4.0 to v1.4.4</a></td>
<td><a href="https://nodejs.org/en/download/releases" rel="nofollow">8.11.x</a></td>
</tr>
<tr>
<td><b><a href="/hyperledger/blockchain-explorer/blob/master/release_notes/v1.0.0-rc1.md">v1.0.0-rc1</a></b> (Nov 18, 2019)</td>
<td><a href="https://hyperledger-fabric.readthedocs.io/en/release-1.4" rel="nofollow">v1.4.2</a></td>
<td><a href="https://nodejs.org/en/download/releases" rel="nofollow">8.11.x</a></td>
</tr>
<tr>
<td><b><a href="/hyperledger/blockchain-explorer/blob/master/release_notes/v0.3.9.5.md">v0.3.9.5</a></b> (Sep 8, 2019)</td>
<td><a href="https://hyperledger-fabric.readthedocs.io/en/release-1.4" rel="nofollow">v1.4.2</a></td>
<td><a href="https://nodejs.org/en/download/releases" rel="nofollow">8.11.x</a></td>
</tr>
<tr>
<td><b><a href="/hyperledger/blockchain-explorer/blob/master/release_notes/v0.3.9.4.md">v0.3.9.4</a></b> (June 18, 2019)</td>
<td><a href="https://hyperledger-fabric.readthedocs.io/en/release-1.4" rel="nofollow">v1.4.1</a></td>
<td><a href="https://nodejs.org/en/download/releases" rel="nofollow">8.11.x</a></td>
</tr>
<tr>
<td><b><a href="/hyperledger/blockchain-explorer/blob/master/release_notes/v0.3.9.3.md">v0.3.9.3</a></b> (May 24, 2019)</td>
<td><a href="https://hyperledger-fabric.readthedocs.io/en/release-1.4" rel="nofollow">v1.4</a></td>
<td><a href="https://nodejs.org/en/download/releases" rel="nofollow">8.11.x</a></td>
</tr>
<tr>
<td><b><a href="/hyperledger/blockchain-explorer/blob/master/release_notes/v0.3.9.2.md">v0.3.9.2</a></b> (May 16, 2019)</td>
<td><a href="https://hyperledger-fabric.readthedocs.io/en/release-1.4" rel="nofollow">v1.4</a></td>
<td><a href="https://nodejs.org/en/download/releases" rel="nofollow">8.11.x</a></td>
</tr>
<tr>
<td><b><a href="/hyperledger/blockchain-explorer/blob/master/release_notes/v0.3.9.1.md">v0.3.9.1</a></b> (Feb 28, 2019)</td>
<td><a href="https://hyperledger-fabric.readthedocs.io/en/release-1.4" rel="nofollow">v1.4</a></td>
<td><a href="https://nodejs.org/en/download/releases" rel="nofollow">8.11.x</a></td>
</tr>
<tr>
<td><b><a href="/hyperledger/blockchain-explorer/blob/master/release_notes/v0.3.9.md">v0.3.9</a></b> (Feb 7, 2019)</td>
<td><a href="https://hyperledger-fabric.readthedocs.io/en/release-1.4" rel="nofollow">v1.4</a></td>
<td><a href="https://nodejs.org/en/download/releases" rel="nofollow">8.11.x</a></td>
</tr>
<tr>
<td><b><a href="/hyperledger/blockchain-explorer/blob/master/release_notes/v0.3.8.md">v0.3.8</a></b> (Dec 13, 2018)</td>
<td><a href="https://hyperledger-fabric.readthedocs.io/en/release-1.3" rel="nofollow">v1.3</a></td>
<td><a href="https://nodejs.org/en/download/releases" rel="nofollow">8.x.x</a></td>
</tr>
<tr>
<td><b><a href="/hyperledger/blockchain-explorer/blob/master/release_notes/v0.3.7.md">v0.3.7</a></b> (Sep 21, 2018)</td>
<td><a href="https://hyperledger-fabric.readthedocs.io/en/release-1.2" rel="nofollow">v1.2</a></td>
<td><a href="https://nodejs.org/en/download/releases" rel="nofollow">8.x.x</a></td>
</tr>
<tr>
<td><b><a href="/hyperledger/blockchain-explorer/blob/master/release_notes/v0.3.6.1.md">v0.3.6.1</a></b> (Sep 21, 2018)</td>
<td><a href="https://hyperledger-fabric.readthedocs.io/en/release-1.2" rel="nofollow">v1.2</a></td>
<td><a href="https://nodejs.org/en/download/releases" rel="nofollow">8.x.x</a></td>
</tr>
<tr>
<td><b><a href="/hyperledger/blockchain-explorer/blob/master/release_notes/v0.3.6.md">v0.3.6</a></b> (Sep 6, 2018)</td>
<td><a href="https://hyperledger-fabric.readthedocs.io/en/release-1.2" rel="nofollow">v1.2</a></td>
<td><a href="https://nodejs.org/en/download/releases" rel="nofollow">8.x.x</a></td>
</tr>
<tr>
<td><b><a href="/hyperledger/blockchain-explorer/blob/master/release_notes/v0.3.5.1.md">v0.3.5.1</a></b> (Sep 21, 2018)</td>
<td><a href="https://hyperledger-fabric.readthedocs.io/en/release-1.1" rel="nofollow">v1.1</a></td>
<td><a href="https://nodejs.org/en/download/releases" rel="nofollow">8.x.x</a></td>
</tr>
<tr>
<td><b><a href="/hyperledger/blockchain-explorer/blob/master/release_notes/v0.3.5.md">v0.3.5</a></b> (Aug 24, 2018)</td>
<td><a href="https://hyperledger-fabric.readthedocs.io/en/release-1.1" rel="nofollow">v1.1</a></td>
<td><a href="https://nodejs.org/en/download/releases" rel="nofollow">8.x.x</a></td>
</tr>
<tr>
<td><b><a href="/hyperledger/blockchain-explorer/blob/master/release_notes/v0.3.4.md">v0.3.4</a></b> (Jul 13, 2018)</td>
<td><a href="https://hyperledger-fabric.readthedocs.io/en/release-1.1" rel="nofollow">v1.1</a></td>
<td><a href="https://nodejs.org/en/download/releases" rel="nofollow">8.x.x</a></td>
</tr>
</tbody>
</table>

## 2.0 Hyperledger Explorer源代码目录结构


```
blockchain-explorer
    |
    ├── app                     Application backend root, Explorer configuration
    |    ├── rest               REST API
    |    ├── persistence        Persistence layer
    |    ├── fabric             Persistence API (Hyperledger Fabric)
    |    └── platform           Platforms
    |    |    └── fabric        Explorer API (Hyperledger Fabric)
    |    └── test               Application backend test
    |
    └── client         	        Web UI
         ├── public             Assets
         └── src                Front end source code
              ├── components    React framework
              ├── services      Request library for API calls
              ├── state         Redux framework
              └── static        Custom and Assets
```

## 3.0 Hyperledger Explorer的依赖说明

在安装和运行Hyperledger Explorer之前需要先满足以下依赖条件：

- Nodejs 8.11.x（注意目前v9.x还不支持）
- PostgreSQL 9.5或更高版本
- [jq](https://stedolan.github.io/jq)
- 基于Linux的操作系统，例如Ubuntu或MacOS

以下版本的Docker已经验证过支持Hyperledger Explorer：

- Docker CE 18.09.2或更高版本
- Docker Compose 1.14.0

## 4.0 克隆Hyperledger Explorer的Git仓库

执行以下命令克隆Hyperledger Explorer的Git仓库以获得最新版本：

```
git clone https://github.com/hyperledger/blockchain-explorer.git
cd blockchain-explorer
```

如果你的网络不是很好，可能上面的命令会执行很长时间。发生这种情况时，可以只保留最新的变更：

```
git clone https://github.com/hyperledger/blockchain-explorer.git -depth=1
cd blockchain-explorer
```

## 5.0 PostgreSQL数据库设置

首先进入app目录：

```
cd blockchain-explorer/app
```

然后修改explorerconfig.json以更新PostgreSQL数据库的配置：

```
"postgreSQL": {
    "host": "127.0.0.1",
    "port": "5432",
    "database": "fabricexplorer",
    "username": "hppoc",
    "passwd": "password"
}
```

配置数据库的另一种替代方式是使用环境变量，例如：

```
export DATABASE_HOST=127.0.0.1
export DATABASE_PORT=5432
export DATABASE_DATABASE=fabricexplorer
export DATABASE_USERNAME=hppoc
export DATABASE_PASSWD=pass12345
```

注意：在每次执行git pull之后，你可能需要修改数据库目录的
权限。执行以下命令进行权限修改：

```
cd blockchain-explorer/app/persistence/fabric/postgreSQL
chmod -R 775 db/
```

接下来运行数据库创建脚本。

在Ubuntu下执行如下命令：

```
cd blockchain-explorer/app/persistence/fabric/postgreSQL/db
sudo -u postgres ./createdb.s
```

在MacOS执行如下命令：

```
cd blockchain-explorer/app/persistence/fabric/postgreSQL/db
./createdb.sh
```

现在可以连接到PostgreSQL数据库，运行DB状态命令：

- `\l`：查看创建的fabricexplorer数据库
- `\d`：查看创建的数据表

如果你的Postgresql启用了TLS，请参考[Postgresql官方文档](https://github.com/hyperledger/blockchain-explorer/blob/master/app/persistence/postgreSQL/CONFIGURE-TLS-CONNECTION-TO-POSTGRESQL.md)。

## 5.1 Hyperledger Explorer身份授权配置

首先进入浏览器应用目录：

```
cd blockchain-explorer/app
```

然后修改explorerconfig.json以更新授权配置（JWT）：

```
"jwt": {
    "secret" : "a secret phrase!!",
    "expiresIn": "2 days"
}
```

其中：

- secret：用于签名消息载荷的密文
- expiresIn：过期时间，以秒为单位的数值或一个时间字符串，例如：60，2 days，10h，7d等，可参考[zeit/ms](https://github.com/zeit/ms)

## 6.0 Fabric网络设置

注意：完成这一部分的设置需要一定的时间。

首先参考Hyperledger官方文档[Building Your First Network](http://hyperledger-fabric.readthedocs.io/en/latest/build_network.html)
搭建好你自己的网络。

然后修改配置文件/blockchain-explorer/app/platform/fabric/config.json里的
对应的值。

Hyperledger Explorer默认使用[fabric-samples/first-network](https://github.com/hyperledger/fabric-samples)

请确保在docker-compose.yaml文件中为每个Peer节点都设置了
环境变量CORE_PEER_GOSSIP_BOOTSTRAP和CORE_PEER_GOSSIP_EXTERNALENDPOINT。
这些设置用来启用Fabric发现服务，Hyperledger Explorer依赖于该服务来
自动发现Fabric区块链网络的拓扑结构。

## 6.1 为Hyperledger Explorer配置运维服务

请参考[ CONFIG-OPERATIONS-SERVICE-HLEXPLORER.md](https://github.com/hyperledger/blockchain-explorer/blob/master/CONFIG-OPERATIONS-SERVICE-HLEXPLORER.md)来
为Hyperledger Explorer配置运维服务。

## 7.0 配置Hyperledger Fabric

开启另一个终端，进入以下目录：

```
cd blockchain-explorer/app/platform/fabric
```

修改config.json文件来定义fabric网络的连接配置文件：

```
{
    "network-configs": {
        "first-network": {
            "name": "firstnetwork",
            "profile": "./connection-profile/first-network.json",
            "enableAuthentication": false
        }
    },
    "license": "Apache-2.0"
}
```

- first-network：是连接配置的名称，可以随意修改
- name：你的fabric网络的名字
- profile：你的连接配置文件的路径

修改JSON文件first-network.json中的连接配置信息：

- 修改fabric-path指向你的fabric网络硬盘路径：
  ```
  /blockchain-explorer/app/platform/fabric/connection-profile/first-network.json
  ```
- 为adminPrivateKey配置选项提供完整的磁盘路径，它通常
  以`_sk`结尾，例如：
  ```
  "/fabric-path/fabric-samples/first-network/crypto-config/peerOrganizations/org1.example.com/users/Admin@org1.example.com/msp/keystore/aaacd899a6362a5c8cc1e6f86d13bfccc777375365bbda9c710bb7119993d71c_sk"
  ```
- adminUser是网络的管理用户
- adminPassword是管理用户的密码
- enableAuthentication标志用来启用登录页，设置为false将跳过
  身份验证
  
## 7.1 为Hyperledger Explorer配置Fabcar示例，可选  

参考Hyperledger Fabric示例中的[Fabcar Sample Network](https://hyperledger-fabric.readthedocs.io/en/release-1.4/understand_fabcar_network.html)
为Hyperledger Explorer设置连接Fabcar示例网络。

- 确保在docker-compose.yaml文件中为每个peer节点都是遏制了
  CORE_PEER_GOSSIP_BOOTSTRAP和CORE_PEER_GOSSIP_EXTERNALENDPOINT
  环境变量。这些设置用于启用fabric的自动发现服务。
- 参考[CONFIG-FABCAR-HLEXPLORER.md](https://github.com/hyperledger/blockchain-explorer/blob/master/CONFIG-FABCAR-HLEXPLORER.md)
  配置Fabcar示例网络

## 7.2 为Hyperledger Explorer配置Balance Transfer示例

参考Hyperledger Fabric示例中的[]Balance Transfer Sample(https://github.com/hyperledger/fabric-samples/tree/release-1.4/balance-transfer)
为Hyperledger Explorer设置对Balance Transfer网络的访问。

参考文档：[CONFIG-BALANCE-TRANSFER-HLEXPLORER.md](https://github.com/hyperledger/blockchain-explorer/blob/master/CONFIG-BALANCE-TRANSFER-HLEXPLORER.md)
  
## 8.0 Hyperledger Composer 设置

TODO

## 9.0 Hyperledger Cello设置

TODO  

## 10.0 构建Hyperledger Explorer

注意，请在每次git pull之后重复以下步骤！

在终端执行如下命令安装、测试并构建项目

```
./main.sh install
```

在终端执行如下命令清理/node_modules、client/node_modules\
client/build、client/coverage、app/test/node_modules目录

```
./main.sh clean
```

在终端执行如下命令测试REST API、UI组件并生成代码覆盖报告；

```
./main.sh test
```

或者：

```
cd blockchain-explorer
npm install
cd blockchain-explorer/app/test
npm install
npm run test
cd client/
npm install
npm run test:ci -- -u --coverage
npm run build
```

## 10.1 配置Hyperledger Explorer启用HTTPS

参考：[CONFIG-HTTPS-HLEXPLORER.md](https://github.com/hyperledger/blockchain-explorer/blob/master/CONFIG-HTTPS-HLEXPLORER.md)

## 11.0 运行Hyperledger Explorer

首先进入应用目录：

```
cd blockchain-explorer/app
```

然后修改explorerconfig.json来更新同步属性，例如同步类型、平台等。

如果修改了explorerconfig.json中的参数，请重新启动同步进程。

如果同步进程和Hyperledger Explorer不在同一台主机上，那么在
Explorer的explorerconfig.json中应当将同步类型设置为host：

```
"sync": {
  "type": "host"
}
```

如果同步进程和Hyperledger Explorer安装在同一台主机上，则设置
为local类型：

```
"sync": {
  "type": "local"
}
```

另外开启一个终端：

- cd blockchain-explorer/
- ./start.sh    启动后台
- ./start.sh debug 以调试方式启动后台
- ./start.sh print   显示帮助信息
- 在浏览器中打开http(s)://localhost:8080
- ./stop.sh 终止node服务器

如果Sync进程在单独主机中，那么在新的终端中：

- cd blockchain-explorer/
- ./syncstart.sh 启动同步节点
- ./syncstop.sh 停止同步节点
- 如果之前在浏览器中访问了hyperledger explorer，请先清理浏览器缓存
- 如果Hyperledger Fabric网络部署在另一台机器上，请切换start.sh/syncstart.sh
  中的DISCOVERY_AS_LOCALHOST标志位false
  
## 11.1 Hyperledger Explorer日志配置

使用如下的环境变量，可以控制Hyperledger Explorer中每个组件
（例如app、db和console）的日志输出等级，例如：
ALL < TRACE < DEBUG < INFO < WARN < ERROR < FATAL < MARK < OFF。
每个文件按时间（7天）和大小（8MB）滚动。

- LOG_LEVEL_APP：应用层日志等级，日志写入logs/app/app.log，默认为DEBUG
- LOG_LEVEL_DB：后端日志等级，日志写入logs/db/db.log，默认为DEBUG
- LOG_LEVEL_CONSOLE：控制台日志等级，日志写入logs/console/console.log，默认为INFO
- LOG_CONSOLE_STDOUT ：iang控制台日志目标从文件切换为标准输出设备，默认值：false

## 12.0 使用Docker运行Hyperledger Explorer

如果以下条件满足的话，可以利用docker自动部署Hyperledger Explorer：

- 安装了bash
- 在部署机器上安装有docker
- 在部署机器上安装有docker compose

## 12.1 Docker仓库

Hyperledger Explorer docker仓库：
https://hub.docker.com/r/hyperledger/explorer/

Hyperledger Explorer PostgreSQL docker 仓库：
https://hub.docker.com/r/hyperledger/explorer-db

## 12.2 使用docker compose运行Hyperledger Explorer

修改示例docker-compose.yaml文件以匹配你自己的环境：


- networks > mynetwork.com > external > name

```
networks:
    mynetwork.com:
        external:
            name: net_byfn
```

- services > explorer.mynetwork.com > volumes 

```
volumes:
  - ./examples/net1/config.json:/opt/explorer/app/platform/fabric/config.json
  - ./examples/net1/connection-profile:/opt/explorer/app/platform/fabric/connection-profile
  - ./examples/net1/crypto:/tmp/crypto
```

- 如果Hyperledger Explorer是通过桥接网络连接到Fabric网络
  的，你需要设置DISCOVERY_AS_LOCALHOST为false以便禁止将
  主机名映射为localhost：
  
```
explorer.mynetwork.com:
    ...
    environment:
    ...
    - DISCOVERY_AS_LOCALHOST=false
```

- 在启动Fabric网络后，运行如下命令启动Hyperledger Explorer和explorer-db服务  

```
cd /blockchain-explorer
docker-compose up -d
```

- 运行如下命令停止服务但不删除持久化数据：

```
docker-compose down
```

- 在docker-compose.yaml中，为持久化数据分配了两个命名
  卷（用于postgresql数据和用户钱包），运行以下命令清理
  这些数据：
  
```
docker-compose down -v
```

## 12.3 ~ 18.0

TODO
