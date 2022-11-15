--ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
--flush privileges;
create database QLKH
use QLKH
create table KHACHHANG(
	MAKH INT AUTO_INCREMENT PRIMARY KEY,
    TEN NVARCHAR(50),
    PASSWORD NVARCHAR(100)
);