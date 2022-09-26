<?php
$keke = file_get_contents('php://input');



$komar = json_decode($keke);


 $conn = new mysqli('db6.cpanelhosting.rs','sdream_webshoz','donMilorad~~','sdream_websho') or die("Connect failed: %s\n". $conn -> error);
         
  
            $sql = "SELECT MAX(id), `active` FROM `ps_popust_duseci_pet` WHERE `cart_id` = '".$komar->cartId."'";
            $result = $conn->query($sql);
            
            
            
            if ($result->field_count > 0) {
               
                // output data of each row
                while($row = $result->fetch_assoc()) {
                
                  
                    echo $row['active'];
                    
                    if((int)$row['active'] < 2){
                    $sql2 = "UPDATE `ps_popust_duseci_pet` SET `active`=2 WHERE `id` =".$row['MAX(id)'];

                    if (mysqli_query($conn, $sql2)) {
                        echo "11";
                    } else {
                        echo "Error updating record: " . mysqli_error($conn);
                             $sql23 = "UPDATE `ps_popust_duseci_pet` SET `active`=2 WHERE `id` =".$row['MAX(id)'];
                                
                                 if (mysqli_query($conn, $sql23)) {
                        echo "11";
                    } else {
                        echo "22";
                    }
                        
                    }
                    
                    }
                    else{
                        echo '33';
                    }
                    
                }
             
            } else {
                echo 'kokor';
                
            }

?>