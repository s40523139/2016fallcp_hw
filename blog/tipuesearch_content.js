var tipuesearch = {"pages":[{"text":"2016Fall 修課成員網誌","tags":"misc","title":"About","url":"./pages/about/"},{"text":"Brython 繪圖 繪圖流程, 導入程式庫, 啟動, 然後引用各種模組開始繪圖 window.onload=function(){ brython(1); } from browser import document as doc import math canvas = doc[\"guitarchord\"] ctx = canvas.getContext(\"2d\") ctx.beginPath() ctx.lineWidth = 1 ctx.moveTo(100, 100) ctx.lineTo(150, 100) ctx.lineTo(150, 200) ctx.lineTo(100, 200) ctx.lineTo(100, 100) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" ctx.stroke() ctx.closePath()","tags":"Course","title":"W10 Brython 繪圖範例","url":"./w10-brython-hui-tu-fan-li.html"},{"text":"找出未分組的名單 data3 = open(\"w6_group.txt\").read() #data3 = open(\"w6_list.txt\").read() #print(data3) group = data3.splitlines() #print(len(group)) # 希望將分組資料轉為學員數列, 令為變數名稱 result_g result_g = [] # 已經註冊者數列設為 registered registered = open(\"w6_list.txt\").read() registered = registered.splitlines() #print(registered) for line in group: # 去除每一行最後的空白成員 sline = line.split(\",\")[:-1] #print (sline) # 再將各組拆成個別組員後, 串成 result_g for m in sline: result_g.append(m) #print(result_g ) #not_in_group = [c for c in registered if c not in result_g] #print(not_in_group) for m in registered: if m not in result_g: print(m)","tags":"Misc","title":"上課練習","url":"./shang-ke-lian-xi.html"},{"text":"用for迴圈列出各組名單 content = open(\"cpa.txt\").read() #print(content) # 這是單行註解 result = content.splitlines() # result 變數資料形變為 list #print(result) # 針對 list 資料，可以利用 for 迴圈列出其數列成員 num = 1 for g in result: g_list = g.split(\",\") g_list = g_list[:-1] for m in g_list: print(\"group:\", num, \"member:\", m) num = num + 1 ''' for line in content.splitlines(): result.append(list(line.split(\",\"))) '''","tags":"Misc","title":"上課練習(2)","url":"./shang-ke-lian-xi-2.html"}]};