import xlrd


query = 'INSERT INTO flight VALUES'
sql = '('
book = xlrd.open_workbook('flight.xls',encoding_override="cp1252")
sh = book.sheet_by_index(0)
st = ''
for i in range(1,sh.nrows):
	for j in range(sh.ncols):
		s = sh.cell_value(i,j)
		if type(s)==float:
			s = str(s)
		else:
			s.encode('utf-8')
		st += s+','

s_list = st.split(',')



value = ''
value3 = ''
#for i in range(sh.ncols):
        #value += "'"+''.join(s_list[i:i+1]) + "',"


for m in range(sh.nrows):
        for f in range(sh.ncols):
                value3 += "'"+ ''.join(s_list[10*m+f:10*m+f+1]) + "',"
value3 = '('+ value3[0:len(value3)-1] +'),'

for i in range(sh.ncols):
        value += "'"+''.join(s_list[i:i+1]) + "',"
value = '('+ value[0:len(value)-1] +'),'


print value
#print value3
query = query  + value3 
print query
