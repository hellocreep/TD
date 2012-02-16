import xlrd
import os

query = 'INSERT INTO flight VALUES'
sql = ''
value = ''
st = ''
book = xlrd.open_workbook('flight.xls',encoding_override="cp1252")
sh = book.sheet_by_index(0)
for i in range(1,sh.nrows):
        for j in range(sh.ncols):
                cell = sh.cell_value(i,j)
                if type(cell) == float:
                        cell = str(cell)
                else:
                        cell = cell.encode('utf-8')
                st += "'" + cell + "',|"
                
s_list = st.split('|')
s_list.pop()
for i in range(sh.nrows-1):
        value = ''.join(s_list[10*i:10*i+10])
        value = value[0:len(value)-1]
        sql += '('+ value + '),'

query = query + sql[0:len(sql)-1]

f = open('sql.txt','wr')
f.write(query)
f.close()
