/* 

计算树每个节点到所有节点的距离之和
思路：树的动态规划思路
动态转移方程：dp[a] = dp[b] -num[b]+ N- num[b]
params: 其中a为b的相邻子节点，N为所有节点树，num[b]为b的所有子节点数

N为树的节点数
edges表示树中的边

 */

const sumOfDistancesInTree = (N, edges) => {
    //计算各个节点的邻接矩阵
    const graph = new Array(N).fill(0).map(i=>[])
    for(let i = 0; i < edges.length; i++){
        const [l , r] = edges[i]
        graph[l].push(r)
        graph[r].push(l)
    }

    const nodeNum = new Array(N).fill(1)
    const distArr = new Array(N).fill(0)
    const dp1 = (root, parent)=>{
        const neighbur = graph[root]
        for(let item of neighbur){
            if(item === parent){
                continue
            }
            dp1(item, root)                                     //递归查找
            nodeNum[root] += nodeNum[item]                      //计算当前节点的子节点树
            distArr[root] += distArr[item]+nodeNum[item]        //计算当前节点字树的距离之和
        }
    }

    const dp2 = (root, parent)=>{
        const neighbur = graph[root]
        for(let item of neighbur){
            if(item === parent){
                continue
            }                                                                      //递归查找
            distArr[item] = distArr[root]-nodeNum[item] + (N - nodeNum[item] )     //计算当前节点字树的距离之和
            dp2(item, root)
        }
    }

    dp1(0, -1)  //从0节点开始查找
    dp2(0, -1)  //从0节点开始查找
    return distArr
}