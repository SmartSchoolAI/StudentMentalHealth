<?php
/*
* 基础架构: 单点低代码开发平台
* 版权所有: 郑州单点科技软件有限公司
* Email: moodle360@qq.com
* Copyright (c) 2023
* License: GPL V3 or Commercial license
*/
header("Content-Type: application/json");
require_once('../cors.php');
require_once('../include.inc.php');

$FormId   = 175;

$sql      = "select * from form_formname where id ='$FormId'";
$rs       = $db->Execute($sql);
$rs_a     = $rs->GetArray();
$Element  = $rs_a[0];
$KEYS     = array_keys($Element);
$VALUES   = array_values($Element);
$sql      = "insert into form_formname(".join(',', $KEYS).") values('".join("','", $VALUES)."');";
print $sql."\n\n";

$sql      = "select * from form_formfield where FormId ='$FormId'";
$rs       = $db->Execute($sql);
$rs_a     = $rs->GetArray();
foreach($rs_a as $Line) {
  $Element        = $Line;
  $Element['id']  = null;
  $KEYS     = array_keys($Element);
  $VALUES   = array_values($Element);
  $sql      = "insert into form_formfield(".join(',', $KEYS).") values('".join("','", $VALUES)."');";
  print $sql."\n\n";
}

$sql      = "select * from form_formflow where FormId ='$FormId'";
$rs       = $db->Execute($sql);
$rs_a     = $rs->GetArray();
foreach($rs_a as $Line) {
  $Element        = $Line;
  $Element['id']  = null;
  $KEYS     = array_keys($Element);
  $VALUES   = array_values($Element);
  $sql      = "insert into form_formflow(".join(',', $KEYS).") values('".join("','", $VALUES)."');";
  print $sql."\n\n";
}






?>
