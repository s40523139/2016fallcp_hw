var tipuesearch = {"pages":[{"tags":"misc","text":"2016Fall 修課成員網誌","title":"About","url":"./pages/about/"},{"tags":"Course","text":"Brython 繪圖 繪圖流程, 導入程式庫, 啟動, 然後引用各種模組開始繪圖 window.onload=function(){ brython(1); } from browser import document as doc import math canvas = doc[\"guitarchord\"] ctx = canvas.getContext(\"2d\") ctx.beginPath() ctx.lineWidth = 1 inc=1 for i in range(100): ctx.moveTo(100+i*inc, 100) ctx.lineTo(100, 100+i*inc) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" ctx.stroke() ctx.closePath()","title":"W10 Brython 繪圖範例","url":"./w10-brython-hui-tu-fan-li.html"},{"tags":"Misc","text":"找出未分組的名單 data3 = open(\"w6_group.txt\").read() #data3 = open(\"w6_list.txt\").read() #print(data3) group = data3.splitlines() #print(len(group)) # 希望將分組資料轉為學員數列, 令為變數名稱 result_g result_g = [] # 已經註冊者數列設為 registered registered = open(\"w6_list.txt\").read() registered = registered.splitlines() #print(registered) for line in group: # 去除每一行最後的空白成員 sline = line.split(\",\")[:-1] #print (sline) # 再將各組拆成個別組員後, 串成 result_g for m in sline: result_g.append(m) #print(result_g ) #not_in_group = [c for c in registered if c not in result_g] #print(not_in_group) for m in registered: if m not in result_g: print(m)","title":"上課練習","url":"./shang-ke-lian-xi.html"},{"tags":"Misc","text":"用for迴圈列出各組名單 content = open(\"cpa.txt\").read() #print(content) # 這是單行註解 result = content.splitlines() # result 變數資料形變為 list #print(result) # 針對 list 資料，可以利用 for 迴圈列出其數列成員 num = 1 for g in result: g_list = g.split(\",\") g_list = g_list[:-1] for m in g_list: print(\"group:\", num, \"member:\", m) num = num + 1 ''' for line in content.splitlines(): result.append(list(line.split(\",\"))) '''","title":"上課練習(2)","url":"./shang-ke-lian-xi-2.html"}]};