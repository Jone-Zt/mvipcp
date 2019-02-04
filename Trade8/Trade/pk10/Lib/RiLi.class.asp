<%
function CalConv(sdate){
 var temp = {"code":0};
 var dd   = sdate.split("-"); //分割时间
 var FIRSTYEAR = 1936;
 var LASTYEAR = 2031;
 var LunarCal = [
 new tagLunarCal(23, 3, 2, 17, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0 ), /* 1936 */ 
  new tagLunarCal( 41, 0, 4, 23, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1 ), 
  new tagLunarCal( 30, 7, 5, 28, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1 ), 
  new tagLunarCal( 49, 0, 6, 33, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1 ), 
  new tagLunarCal( 38, 0, 0, 38, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1 ), /* 1940 */ 
  new tagLunarCal( 26, 6, 2, 44, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0 ), 
  new tagLunarCal( 45, 0, 3, 49, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0 ), 
  new tagLunarCal( 35, 0, 4, 54, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1 ), 
  new tagLunarCal( 24, 4, 5, 59, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1 ), /* 1944 */ 
  new tagLunarCal( 43, 0, 0, 5, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1 ), 
  new tagLunarCal( 32, 0, 1, 10, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1 ), 
  new tagLunarCal( 21, 2, 2, 15, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1 ), 
  new tagLunarCal( 40, 0, 3, 20, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1 ), /* 1948 */ 
  new tagLunarCal( 28, 7, 5, 26, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1 ), 
  new tagLunarCal( 47, 0, 6, 31, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1 ), 
  new tagLunarCal( 36, 0, 0, 36, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0 ), 
  new tagLunarCal( 26, 5, 1, 41, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1 ), /* 1952 */ 
  new tagLunarCal( 44, 0, 3, 47, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1 ), 
  new tagLunarCal( 33, 0, 4, 52, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0 ), 
  new tagLunarCal( 23, 3, 5, 57, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1 ), 
  new tagLunarCal( 42, 0, 6, 2, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1 ), /* 1956 */ 
  new tagLunarCal( 30, 8, 1, 8, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0 ), 
  new tagLunarCal( 48, 0, 2, 13, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0 ), 
  new tagLunarCal( 38, 0, 3, 18, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1 ), 
  new tagLunarCal( 27, 6, 4, 23, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0 ), /* 1960 */ 
  new tagLunarCal( 45, 0, 6, 29, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0 ), 
  new tagLunarCal( 35, 0, 0, 34, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1 ), 
  new tagLunarCal( 24, 4, 1, 39, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0 ), 
  new tagLunarCal( 43, 0, 2, 44, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0 ), /* 1964 */ 
  new tagLunarCal( 32, 0, 4, 50, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1 ), 
  new tagLunarCal( 20, 3, 5, 55, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0 ), 
  new tagLunarCal( 39, 0, 6, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0 ), 
  new tagLunarCal( 29, 7, 0, 5, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1 ), /* 1968 */ 
  new tagLunarCal( 47, 0, 2, 11, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1 ), 
  new tagLunarCal( 36, 0, 3, 16, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0 ), 
  new tagLunarCal( 26, 5, 4, 21, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1 ), 
  new tagLunarCal( 45, 0, 5, 26, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1 ), /* 1972 */ 
  new tagLunarCal( 33, 0, 0, 32, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1 ), 
  new tagLunarCal( 22, 4, 1, 37, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1 ), 
  new tagLunarCal( 41, 0, 2, 42, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1 ), 
  new tagLunarCal( 30, 8, 3, 47, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1 ), /* 1976 */ 
  new tagLunarCal( 48, 0, 5, 53, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1 ), 
  new tagLunarCal( 37, 0, 6, 58, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1 ), 
  new tagLunarCal( 27, 6, 0, 3, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0 ), 
  new tagLunarCal( 46, 0, 1, 8, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0 ), /* 1980 */ 
  new tagLunarCal( 35, 0, 3, 14, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 1 ), 
  new tagLunarCal( 24, 4, 4, 19, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1 ), 
  new tagLunarCal( 43, 0, 5, 24, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1 ), 
  new tagLunarCal( 32, 10, 6, 29, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1 ), /* 1984 */ 
  new tagLunarCal( 50, 0, 1, 35, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0 ), 
  new tagLunarCal( 39, 0, 2, 40, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1 ), 
  new tagLunarCal( 28, 6, 3, 45, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0 ), 
  new tagLunarCal( 47, 0, 4, 50, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1 ), /* 1988 */ 
  new tagLunarCal( 36, 0, 6, 56, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0 ), 
  new tagLunarCal( 26, 5, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1 ), 
  new tagLunarCal( 45, 0, 1, 6, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0 ), 
  new tagLunarCal( 34, 0, 2, 11, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0 ), /* 1992 */ 
  new tagLunarCal( 22, 3, 4, 17, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0 ), 
  new tagLunarCal( 40, 0, 5, 22, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0 ), 
  new tagLunarCal( 30, 8, 6, 27, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1 ), 
  new tagLunarCal( 49, 0, 0, 32, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1 ), /* 1996 */ 
  new tagLunarCal( 37, 0, 2, 38, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1 ), 
  new tagLunarCal( 27, 5, 3, 43, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1 ), 
  new tagLunarCal( 46,  0, 4, 48, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1 ), /* 1999 */
  new tagLunarCal( 35,  0, 5, 53, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1 ), /* 2000 */
  new tagLunarCal( 23,  4, 0, 59, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1 ),
  new tagLunarCal( 42,  0, 1,  4, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1 ),
  new tagLunarCal( 31,  0, 2,  9, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0 ),
  new tagLunarCal( 21,  2, 3, 14, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1 ), /* 2004 */
  new tagLunarCal( 39,  0, 5, 20, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1 ),
  new tagLunarCal( 28,  7, 6, 25, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1 ),
  new tagLunarCal( 48,  0, 0, 30, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1 ),
  new tagLunarCal( 37,  0, 1, 35, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1 ), /* 2008 */
  new tagLunarCal( 25,  5, 3, 41, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1 ),
  new tagLunarCal( 44,  0, 4, 46, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1 ),
  new tagLunarCal( 33,  0, 5, 51, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1 ),
  new tagLunarCal( 22,  4, 6, 56, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0 ), /* 2012 */
  new tagLunarCal( 40,  0, 1,  2, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0 ),
  new tagLunarCal( 30,  9, 2,  7, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1 ),
  new tagLunarCal( 49,  0, 3, 12, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1 ),
  new tagLunarCal( 38,  0, 4, 17, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0 ), /* 2016 */
  new tagLunarCal( 27,  6, 6, 23, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1 ),
  new tagLunarCal( 46,  0, 0, 28, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0 ),
  new tagLunarCal( 35,  0, 1, 33, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0 ),
  new tagLunarCal( 24,  4, 2, 38, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1 ), /* 2020 */
  new tagLunarCal( 42,  0, 4, 44, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1 ),
  new tagLunarCal( 31,  0, 5, 49, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0 ),
  new tagLunarCal( 21,  2, 6, 54, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1 ),
  new tagLunarCal( 40,  0, 0, 59, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1 ), /* 2024 */
  new tagLunarCal( 28,  6, 2,  5, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0 ),
  new tagLunarCal( 47,  0, 3, 10, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1 ),
  new tagLunarCal( 36,  0, 4, 15, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1 ),
  new tagLunarCal( 25,  5, 5, 20, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0 ), /* 2028 */
  new tagLunarCal( 43,  0, 0, 26, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1 ),
  new tagLunarCal( 32,  0, 1, 31, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0 ),
  new tagLunarCal( 22,  3, 2, 36, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0 ) ];
 /* 西曆年每月之日數 */
 var SolarCal = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
 /* 西曆年每月之累積日數, 平年與閏年 */
 var SolarDays = [0,31,59,90,120,151,181,212,243,273,304,334,365,396,0,31,60,91,121,152,182,213,244,274,305,335,66,397];
 var AnimalIdx = ["馬","羊","猴","雞","狗","豬","鼠","牛","虎","兔","龍","蛇"];
 var LocationIdx = ["南","東","北","西"];
 LunarYear = parseInt(dd[0]);
 LunarMonth = parseInt(dd[1]);
 LunarDate  = parseInt(dd[2]);
 if ( LunarYear < FIRSTYEAR || LunarYear >= LASTYEAR ) return temp;   
          
        y = LunarYear - FIRSTYEAR ; 
        im = LunarCal[y].Intercalation; 
        lm = LunarMonth; 
          
        if ( lm < 0 ) 
        { 
            if ( lm != -im ) 
                return alert(请输入有效月份);   
        } 
        else if ( lm < 1 || lm > 12 ) return temp;  
        
        if ( im != 0 ) 
        { 
            if ( lm > im ) 
                lm++; 
            else if ( lm == -im ) 
                lm = im + 1; 
        } 
        lm--; 

        if ( LunarDate > LunarCal[y].MonthDays[lm] + 29 ) 
            return  temp;
           
        
        acc = 0;
        for ( i=0; i < lm;i++) {

         acc+= LunarCal[y].MonthDays[i] + 29;
          
         
       }
       
        acc +=LunarCal[y].BaseDays + LunarDate;          
            leap = GetLeap( LunarYear ); 
            
            
        for ( i=13; i>=0; i-- ) {
        
            if ( acc > SolarDays[leap*14+i] ) 
                break; 
        }       
             SolarDate = acc - SolarDays[leap*14 + i]  ;
            
            
           
            if ( i <= 11 ) 
            { 
              
                SolarYear = LunarYear; 
                SolarMonth = i + 1; 
            } 
            else 
            { 
                
                SolarYear = LunarYear + 1; 
                SolarMonth = i - 11; 
            } 
             
         
            leap = GetLeap( SolarYear ); 
            y = SolarYear - FIRSTYEAR;  
            acc = SolarDays[leap*14 + SolarMonth-1] + SolarDate;
            
            weekday = ( acc + LunarCal[y].BaseWeekday ) % 7; 
            kc = acc + LunarCal[y].BaseKanChih; 
            kan = kc % 10; 
            chih = kc % 12; 
            temp["M"] = SolarMonth ;
	        temp["d"] = SolarDate  ;
			return temp ;
 }

 /* 闰年, 返回 0 平年, 1 闰年 */
function GetLeap( year )
 {
   if ( year % 400 == 0 )
     return 1;
   else if ( year % 100 == 0 )
     return 0;
   else if ( year % 4 == 0 )
     return 1;
   else
     return 0;
 }

function tagLunarCal( d, i, w, k, m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, m13) {
 this.BaseDays = d;         /* 1 月 1 日到正月初一的累计日 */
 this.Intercalation = i;    /* 闰月月份. 0==此年沒有闰月 */
 this.BaseWeekday = w;      /* 此年 1 月 1 日为星期减 1 */
 this.BaseKanChih = k;      /* 此年 1 月 1 日之干支序号减 1 */
 this.MonthDays = [ m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, m13 ]; /* 此农历年每月之大小, 0==小月(29日), 1==大月(30日) */
}

function OpenWin( url ) { 
 return window.open( url, 'coop', 'width=320,height=350,toolbar=0,location=0,directories=0,status=0,menuBar=0,scrollBars=0,resizable=1' ); 
} 


function IsInteger(string ,sign) 
{  
  var integer; 
  if ((sign!=null) && (sign!='-') && (sign!='+')) 
  { 
   alert('IsInter(string,sign)的参数出错：nsign为null或"-"或"+"'); 
   return false; 
  } 
  integer = parseInt(string); 
  if (isNaN(integer)) 
  { 
   return false; 
  } 
  else if (integer.toString().length==string.length) 
  {  
   if ((sign==null) || (sign=='-' && integer<0) || (sign=='+' && integer>0)) 
   { 
     return true; 
   } 
   else 
     return false;  
  } 
  else 
   return false; 
} 

function FormatDate(str){
   var d = new Date();
   var temm = {
       "Y" : d.getFullYear(),
	   "m" : (d.getMonth()+1) > 9 ? d.getMonth()+1 : "0"+(d.getMonth()+1),
	   "d" : d.getDate() > 9 ? d.getDate():"0"+d.getDate(),
	   "H" : d.getHours()> 9 ? d.getHours() : "0"+d.getHours(),
	   "i" : d.getMinutes() > 9 ?　d.getMinutes(): "0"+d.getMinutes(),
	   "s" : d.getSeconds() > 9 ?  d.getSeconds() : "0"+d.getSeconds() 
   }
   for( var indexs in temm ){
     str = str.replace(indexs,temm[indexs]);
   }
   return str ;
}

function FormatDate2(aa,str){
   var dd = new Date(aa);
   var temss = {
		 "Y" : dd.getFullYear(),
		 "m" : (dd.getMonth()+1) > 9 ? dd.getMonth()+1 : "0"+(dd.getMonth()+1),
		 "d" : dd.getDate() > 9 ? dd.getDate():"0"+dd.getDate(),
		 "H" : dd.getHours()> 9 ? dd.getHours() : "0"+dd.getHours(),
		 "i" : dd.getMinutes() > 9 ?　dd.getMinutes(): "0"+dd.getMinutes(),
		 "s" : dd.getSeconds() > 9 ?  dd.getSeconds() : "0"+dd.getSeconds() 
   }
   for( var indexs in temss ){
     str = str.replace(indexs,temss[indexs]);
   }
   return str ;
}

function echo(str){
  Response.Write(str);
  Response.End();
} 
%>