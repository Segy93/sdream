<?php
/**
 * 2007-2016 PrestaShop
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * http://opensource.org/licenses/osl-3.0.php
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to http://www.prestashop.com for more information.
 *
 *  @author 	PrestaShop SA <contact@prestashop.com>
 *  @copyright  2007-2016 PrestaShop SA
 *  @license    http://opensource.org/licenses/osl-3.0.php  Open Software License (OSL 3.0)
 *  International Registered Trademark & Property of PrestaShop SA
 */

class AddressCore extends ObjectModel
{
    /** @var int Customer id which address belongs to */
    public $id_customer = null;

    /** @var int Manufacturer id which address belongs to */
    public $id_manufacturer = null;

    /** @var int Supplier id which address belongs to */
    public $id_supplier = null;

    /**
     * @since 1.5.0
     * @var int Warehouse id which address belongs to
     */
    public $id_warehouse = null;

    /** @var int Country id */
    public $id_country;

    /** @var int State id */
    public $id_state;

    /** @var string Country name */
    public $country;

    /** @var string Alias (eg. Home, Work...) */
    public $alias;

    /** @var string Company (optional) */
    public $company;

    /** @var string Lastname */
    public $lastname;

    /** @var string Firstname */
    public $firstname;

    /** @var string Address first line */
    public $address1;

    /** @var string Address second line (optional) */
    public $address2;

    /** @var string Postal code */
    public $postcode;

    /** @var string City */
    public $city;

    /** @var string Any other useful information */
    public $other;

    /** @var string Phone number */
    public $phone;

    /** @var string Mobile phone number */
    public $phone_mobile;

    /** @var string VAT number */
    public $vat_number;

    /** @var string DNI number */
    public $dni;

    /** @var string Object creation date */
    public $date_add;

    /** @var string Object last modification date */
    public $date_upd;

    /** @var bool True if address has been deleted (staying in database as deleted) */
    public $deleted = 0;

    protected static $_idZones = array();
    protected static $_idCountries = array();

    /**
     * @see ObjectModel::$definition
     */
    public static $definition = array(
        'table' => 'address',
        'primary' => 'id_address',
        'fields' => array(
            'id_customer' =>        array('type' => self::TYPE_INT, 'validate' => 'isNullOrUnsignedId', 'copy_post' => false),
            'id_manufacturer' =>    array('type' => self::TYPE_INT, 'validate' => 'isNullOrUnsignedId', 'copy_post' => false),
            'id_supplier' =>        array('type' => self::TYPE_INT, 'validate' => 'isNullOrUnsignedId', 'copy_post' => false),
            'id_warehouse' =>        array('type' => self::TYPE_INT, 'validate' => 'isNullOrUnsignedId', 'copy_post' => false),
            'id_country' =>        array('type' => self::TYPE_INT, 'validate' => 'isUnsignedId', 'required' => true),
            'id_state' =>            array('type' => self::TYPE_INT, 'validate' => 'isNullOrUnsignedId'),
            'alias' =>                array('type' => self::TYPE_STRING, 'validate' => 'isGenericName', 'required' => true, 'size' => 32),
            'company' =>            array('type' => self::TYPE_STRING, 'validate' => 'isGenericName', 'size' => 64),
            'lastname' =>            array('type' => self::TYPE_STRING, 'validate' => 'isName', 'required' => true, 'size' => 32),
            'firstname' =>            array('type' => self::TYPE_STRING, 'validate' => 'isName', 'required' => true, 'size' => 32),
            'vat_number' =>            array('type' => self::TYPE_STRING, 'validate' => 'isGenericName'),
            'address1' =>            array('type' => self::TYPE_STRING, 'validate' => 'isAddress', 'required' => true, 'size' => 128),
            'address2' =>            array('type' => self::TYPE_STRING, 'validate' => 'isAddress', 'size' => 128),
            'postcode' =>            array('type' => self::TYPE_STRING, 'validate' => 'isPostCode', 'size' => 12),
            'city' =>                array('type' => self::TYPE_STRING, 'validate' => 'isCityName', 'required' => true, 'size' => 64),
            'other' =>                array('type' => self::TYPE_STRING, 'validate' => 'isMessage', 'size' => 300),
            'phone' =>                array('type' => self::TYPE_STRING, 'validate' => 'isPhoneNumber', 'size' => 32),
            'phone_mobile' =>        array('type' => self::TYPE_STRING, 'validate' => 'isPhoneNumber', 'size' => 32),
            'dni' =>                array('type' => self::TYPE_STRING, 'validate' => 'isDniLite', 'size' => 16),
            'deleted' =>            array('type' => self::TYPE_BOOL, 'validate' => 'isBool', 'copy_post' => false),
            'date_add' =>            array('type' => self::TYPE_DATE, 'validate' => 'isDate', 'copy_post' => false),
            'date_upd' =>            array('type' => self::TYPE_DATE, 'validate' => 'isDate', 'copy_post' => false),
        ),
    );

    protected $_includeVars = array('addressType' => 'table');
    protected $_includeContainer = false;

    protected $webserviceParameters = array(
        'objectsNodeName' => 'addresses',
        'fields' => array(
            'id_customer' => array('xlink_resource'=> 'customers'),
            'id_manufacturer' => array('xlink_resource'=> 'manufacturers'),
            'id_supplier' => array('xlink_resource'=> 'suppliers'),
            'id_warehouse' => array('xlink_resource'=> 'warehouse'),
            'id_country' => array('xlink_resource'=> 'countries'),
            'id_state' => array('xlink_resource'=> 'states'),
        ),
    );

    /**
     * Build an address
     *
     * @param int $id_address Existing address id in order to load object (optional)
     */
    public function __construct($id_address = null, $id_lang = null)
    {
        parent::__construct($id_address);

        /* Get and cache address country name */
        if ($this->id) {
            $this->country = Country::getNameById($id_lang ? $id_lang : Configuration::get('PS_LANG_DEFAULT'), $this->id_country);
        }
    }

    /**
     * @see ObjectModel::add()
     */
    public function add($autodate = true, $null_values = false)
    {
        if (!parent::add($autodate, $null_values)) {
            return false;
        }

        if (Validate::isUnsignedId($this->id_customer)) {
            Customer::resetAddressCache($this->id_customer, $this->id);
        }
        return true;
    }

    public function update($null_values = false)
    {
        // Empty related caches
        if (isset(self::$_idCountries[$this->id])) {
            unset(self::$_idCountries[$this->id]);
        }
        if (isset(self::$_idZones[$this->id])) {
            unset(self::$_idZones[$this->id]);
        }

        if (Validate::isUnsignedId($this->id_customer)) {
            Customer::resetAddressCache($this->id_customer, $this->id);
        }

        return parent::update($null_values);
    }

    /**
     * @see ObjectModel::delete()
     */
    public function delete()
    {
        if (Validate::isUnsignedId($this->id_customer)) {
            Customer::resetAddressCache($this->id_customer, $this->id);
        }

        if (!$this->isUsed()) {
            return parent::delete();
        } else {
            $this->deleted = true;
            return $this->update();
        }
    }

    /**
    * Returns fields required for an address in an array hash
    * @return array hash values
    */
    public static function getFieldsValidate()
    {
        $tmp_addr = new Address();
        $out = $tmp_addr->fieldsValidate;

        unset($tmp_addr);
        return $out;
    }

    /**
     * @see ObjectModel::validateController()
     */
    public function validateController($htmlentities = true)
    {
        $errors = parent::validateController($htmlentities);
        if (!Configuration::get('VATNUMBER_MANAGEMENT') || !Configuration::get('VATNUMBER_CHECKING')) {
            return $errors;
        }
        include_once(_PS_MODULE_DIR_.'vatnumber/vatnumber.php');
        if (class_exists('VatNumber', false)) {
            return array_merge($errors, VatNumber::WebServiceCheck($this->vat_number));
        }
        return $errors;
    }
    /**
     * Get zone id for a given address
     *
     * @param int $id_address Address id for which we want to get zone id
     * @return int Zone id
     */
    public static function getZoneById($id_address)
    {
        if (!isset($id_address) || empty($id_address)) {
            return false;
        }

        if (isset(self::$_idZones[$id_address])) {
            return self::$_idZones[$id_address];
        }

        $id_zone = Hook::exec('actionGetIDZoneByAddressID', array('id_address' => $id_address));

        if (is_numeric($id_zone)) {
            self::$_idZones[$id_address] = (int)$id_zone;
            return self::$_idZones[$id_address];
        }

        $result = Db::getInstance(_PS_USE_SQL_SLAVE_)->getRow('
			SELECT s.`id_zone` AS id_zone_state, c.`id_zone`
			FROM `'._DB_PREFIX_.'address` a
			LEFT JOIN `'._DB_PREFIX_.'country` c ON c.`id_country` = a.`id_country`
			LEFT JOIN `'._DB_PREFIX_.'state` s ON s.`id_state` = a.`id_state`
			WHERE a.`id_address` = '.(int)$id_address);

        self::$_idZones[$id_address] = (int)((int)$result['id_zone_state'] ? $result['id_zone_state'] : $result['id_zone']);
        return self::$_idZones[$id_address];
    }

    /**
     * Check if country is active for a given address
     *
     * @param int $id_address Address id for which we want to get country status
     * @return int Country status
     */
    public static function isCountryActiveById($id_address)
    {
        if (!isset($id_address) || empty($id_address)) {
            return false;
        }

        $cache_id = 'Address::isCountryActiveById_'.(int)$id_address;
        if (!Cache::isStored($cache_id)) {
            $result = (bool)Db::getInstance(_PS_USE_SQL_SLAVE_)->getvalue('
			SELECT c.`active`
			FROM `'._DB_PREFIX_.'address` a
			LEFT JOIN `'._DB_PREFIX_.'country` c ON c.`id_country` = a.`id_country`
			WHERE a.`id_address` = '.(int)$id_address);
            Cache::store($cache_id, $result);
            return $result;
        }
        return Cache::retrieve($cache_id);
    }

     
     public static function prmpi($prmpolja)
    {
      $sql = 'SELECT * FROM ps_address WHERE id_customer  = '.Context::getContext()->customer->id;
       $results = Db::getInstance()->ExecuteS($sql);


    
         return $results;

    }
  
 public static function prmpii($prmpolja)
    {
  $context = Context::getContext();
$cartID = (int)$context->cookie->id_cart;
return $cartID;

    }
   
 public static function prmpiica($prmpolja)
    {

 function my_simple_cryptttt( $string, $action = 'e' ) {
    // you may change these values to your own
    $secret_key = 'my_simple_secret_key2019';
    $secret_iv = 'my_simple_secret_iv2019';
 
    $output = false;
    $encrypt_method = "AES-256-CBC";
    $key = hash( 'sha256', $secret_key );
    $iv = substr( hash( 'sha256', $secret_iv ), 0, 16 );
 
    if( $action == 'e' ) {
        $output = base64_encode( openssl_encrypt( $string, $encrypt_method, $key, 0, $iv ) );
    }
    else if( $action == 'd' ){
        $output = openssl_decrypt( base64_decode( $string ), $encrypt_method, $key, 0, $iv );
    }
 
    return $output;
}

if(isset($_GET['porudzbina'])){
    
    
    
    
 $prpiz  = my_simple_cryptttt($_GET['detaljiPorudzbine'],'d');
$resulti=Db::getInstance()->ExecuteS('SELECT  COUNT(1) FROM `ps_order_kombank` WHERE `unike_oid` ="'.$_GET['porudzbina'] .'" ');

    if($resulti[0]['COUNT(1)'] == '1'){
        
        
     echo '<div id="glembajka" style="display:none;">'.$_GET['porudzbina'].'</div>';
     echo '<h2 class="kolper"> Uspešna porudžbina.</h2>'; 
     echo '<h4 class="kolper"> <strong>Identifikacioni broj porudžbine: </strong>' .$_GET['porudzbina'] .'</h4>'; 
     echo '<h2 class="kolper"> Vaša porudžbina se obrađuje molim vas sačekajte.</h2>'; 
     echo '<style>.infoZikar{display:none;}.buttonPay{display:none;}</style>';
     echo '<script>document.getElementById("komarica").style.display="none";</script>';
     echo '<h4 class="kolper"></h4>'; 
     
   $resultii=Db::getInstance()->ExecuteS('SELECT  COUNT(1) FROM `ps_order_kombank_ok` WHERE `unike_oid` ="'.$_GET['porudzbina'] .'" ');  
   
   if($resultii[0]['COUNT(1)'] > 0){
       print_r($resultii);
   }else{
      $insertData = array(
         'unike_oid'  => $_GET['porudzbina'], 
         'detaljiPorudzbine' => $_GET['detaljiPorudzbine']
      );
       Db::getInstance()->insert("order_kombank_ok", $insertData);
   }  


    
    }
    else{
      
         echo '<div id="glembajka" style="display:none;">desila se greška</div>';
    }
}
else if(isset($_GET['porudzbinaFail'])){
    $prpi23  = $_GET['porudzbinaFail'];






         $insertDatay = array(
            'unike_oid' =>  $_GET['porudzbinaFail'],
            'detaljiPorudzbine' => $_GET['detaljiPorudzbine']
      );
   

 Db::getInstance()->insert("order_kombank_fail", $insertDatay);
 
     echo '<h2 class="kolper"> Desila je se greška.</h2>'; 
     echo '<h4 class="kolper"> <strong>Broj porudzbine:</strong> <span id="helpingSpaningZ">' .$_GET['porudzbinaFail'] .'</span></h4>';



 


$prpi  = my_simple_cryptttt($_GET['detaljiPorudzbine'],'d');
if (empty($_GET['porudzbinaFail'])) {
    
    
$actual_link = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://{$_SERVER['HTTP_HOST']}{$_SERVER['REQUEST_URI']}";
    

        $pieces = explode('?porudzbinaFail=', $actual_link);

    header('Location: '. $pieces[0] );
}




if (strpos($prpi, '"ErrMsg":"') !== false) {
    $pieces = explode('"ErrMsg":"', $prpi);
$pieces2 = explode('"',  $pieces[1]);
$pieces3 =explode('"ProcReturnCode":"', $prpi);
$pieces3a = explode('"', $pieces3[1]);

echo '<div id="glembajka" style="display:none;">desila se greška</div>';
echo '<h4 class="kolper"> <strong>Šifra greške: </strong>' .$pieces3a[0].'</h4>'; 
echo '<h4 class="kolper"> <strong>Poruka od banke: </strong>' .  $pieces2[0] .'</h4>';

}
if (strpos($prpi, '"mdErrorMsg":"') !== false) {

$pieces = explode('"mdErrorMsg":"', $prpi);
$pieces2 = explode('"',  $pieces[1]);


echo '<div id="glembajka" style="display:none;">desila se greška</div>';

echo '<h4 class="kolper"> <strong>Poruka od banke: </strong>' .  $pieces2[0] .'</h4>';


}


   
 echo '<h3 class="kolper"> Molimo vas pokušajte ponovo</h3>'; 
    

}
else{
  echo '<div id="glembajka" style="display:none;">desila se greška</div>';  
}
    }
    
    

   
   
    public static function my_simple_crypt( $action,$stringhh='',$k1='ne', $ki2='off',$ki3='off',$ki4='off',$ki4r='off',$ki5='off',$ki6='off',$ki7='off',$ki8=array(),$BillToCompany,$BillToName,$BillToStreet2, $BillToCity,$BillToPostalCode, $BillToCountry,$ShipToCompany,$ShipToName,$ShipToStreet1,$ShipToStreet2,$ShipToCity,$ShipToPostalCode,$ShipToCountry,$specStuff='off' ) {
        
        

    // you may change these values to your own
    $secret_key = 'my_simple_secret_key2019';
    $secret_iv = 'my_simple_secret_iv2019';
 
    $output = false;
    $encrypt_method = "AES-256-CBC";
    $key = hash( 'sha256', $secret_key );
    $iv = substr( hash( 'sha256', $secret_iv ), 0, 16 );
 
    if( $action == 'e' ) {
        
        $output2 = base64_encode( openssl_encrypt( $ki4r, $encrypt_method, $key, 0, $iv ) );
    }
    else if( $action == 'd' ){
        $output = openssl_decrypt( base64_decode( $stringhh ), $encrypt_method, $key, 0, $iv );
    }
 
   if($k1 === 'da'){
     $date = date('Y/m/d H:i:s');

    if (isset($_GET['porudzbina'])) {
         
     } 
     else if (isset($_GET['porudzbinaFail'])){
         
     }
     else{
        $result22 = '"%'.$ki2.'"';
    
        $sqqqql = 'SELECT `unike_oid` FROM `ps_order_kombank` WHERE `unike_oid` LIKE '.$result22;
             $connn = new mysqli('db6.cpanelhosting.rs','sdream_webshoz','donMilorad~~','sdream_websho') or die("Connect failed: %s\n". $conn -> error);
  
          $resultingzz = $connn->query($sqqqql);
             if ($resultingzz->num_rows > 0) {
                // output data of each row
                while($rowwl = $resultingzz->fetch_assoc()) {
                $rowwl["unike_oid"];
                 $query = "UPDATE `ps_order_kombank` SET `unike_oid`='".'ORDER-'. Context::getContext()->customer->id .'-'.  substr($output2, -10).'-'.$ki2 ."',`total`='".$ki3."',`rnd`='".$ki4."',`drrnd`='".$output2."',`email`='".$ki5."',`adresa`='".$ki6."',`phone`='".$ki7."',`proizvodi`='".json_encode($ki8)."',`hash`='off',`datum`='".$date."',`BillToCompany`='".$BillToCompany."',`BillToName`='".$BillToName."',`BillToStreet2`='".$BillToStreet2."',`BillToCity`='".$BillToCity."',`BillToPostalCode`='".$BillToPostalCode."',`BillToCountry`='Srbija',`ShipToCompany`='".$ShipToCompany."',`ShipToName`='".$ShipToName."',`ShipToStreet1`='".$ShipToStreet1."',`ShipToStreet2`='".$ShipToStreet2."',`ShipToCity`='".$ShipToCity."',`ShipToPostalCode`='".$ShipToPostalCode."',`ShipToCountry`='".$ShipToCountry."' WHERE `unike_oid` = '".$rowwl["unike_oid"]."' ";
            Db::getInstance()->Execute($query);   
                }
             
            } else {
      
 
      
      
               $insertData = array(
         'unike_oid'  => 'ORDER-'. Context::getContext()->customer->id .'-'.  substr($output2, -10).'-'.$ki2, 
         'total'   => $ki3, 
         'rnd'  => $ki4,
         'drrnd' => $output2,
         'email'  => $ki5,
         'adresa'  => $ki6, 
         'phone'   => $ki7, 
         'proizvodi'  => json_encode($ki8),
         'hash'     =>'off',
         'datum'    => $date,
         'BillToCompany' => $BillToCompany,
         'BillToName' => $BillToName,
         'BillToStreet2' => $BillToStreet2,
         'BillToCity' => $BillToCity,
         'BillToPostalCode' => $BillToPostalCode,
         'BillToCountry' => $BillToCountry,
         'ShipToCompany' => $ShipToCompany,
         'ShipToName' => $ShipToName,
         'ShipToStreet1' => $ShipToStreet1,
         'ShipToStreet2' => $ShipToStreet2,
         'ShipToCity' => $ShipToCity,
         'ShipToPostalCode' => $ShipToPostalCode,
         'ShipToCountry' => $ShipToCountry
      );
      

 Db::getInstance()->insert("order_kombank", $insertData);  
            }
         
   
     }
 return $output2;
 
   }
   else if ($k1 === 'ne'){
       return $output2;
   }
}
    
      public static function identifikacioniBrojPlacanja($recive)
    {
        
        $result = (int)Db::getInstance(_PS_USE_SQL_SLAVE_)->getValue('SELECT `id_cart` FROM `ps_orders` WHERE `id_order` ='.$recive);
        $result2 = '"%'.$result.'"';
    
        $sqqql = 'SELECT `unike_oid` FROM `ps_order_kombank_ok` WHERE `unike_oid` LIKE '.$result2;
        

        $conn = new mysqli('db6.cpanelhosting.rs','sdream_webshoz','donMilorad~~','sdream_websho') or die("Connect failed: %s\n". $conn -> error); 
            
            $resultingz = $conn->query($sqqql);
             if ($resultingz->num_rows > 0) {
                // output data of each row
                while($row = $resultingz->fetch_assoc()) {
                echo $row["unike_oid"];
                    
                }
             
            } else {
                
                
            }
    }

public static function kemere($str)
    {
       $cyr = ['а','б','в','г','д','ђ','е','ж','з','и','ј','к','л','љ','м','н','њ','о','п','р','с','т','ћ','у','ф','х','ц','ч','џ','ш','š','đ','č','ć','ž','А','Б','В','Г','Д','Ђ','Е','Ж','З','И','Ј','К','Л','Љ','М','Н','Њ','О','П','Р','С','Т','Ћ','У','Ф','Х','Ц','Ч','Џ','Ш','Š','Đ','Č','Ć','Ž'];
        $lat = ['a','b','v','g','d','dj','e','z','z','i','j','k','l','lj','m','n','nj','o','p','r','s','t','c','u','f','h','c','c','dz','s','s','dj','c','c','z','A','B','V','G','D','Dj','E','Z','Z','I','J','K','L','Lj','M','N','Nj','O','P','R','S','T','C','U','F','H','C','C','Dz','S','S','Dj','C','C','Z'];
        $mazut = str_replace($cyr, $lat, $str);
    
        return $mazut;
    }
     
   
    /**
     * Check if address is used (at least one order placed)
     *
     * @return int Order count for this address
     */
    public function isUsed()
    {
        $result = (int)Db::getInstance(_PS_USE_SQL_SLAVE_)->getValue('
		SELECT COUNT(`id_order`) AS used
		FROM `'._DB_PREFIX_.'orders`
		WHERE `id_address_delivery` = '.(int)$this->id.'
		OR `id_address_invoice` = '.(int)$this->id);

        return $result > 0 ? (int)$result : false;
    }

    public static function getCountryAndState($id_address)
    {
        if (isset(self::$_idCountries[$id_address])) {
            return self::$_idCountries[$id_address];
        }
        if ($id_address) {
            $result = Db::getInstance(_PS_USE_SQL_SLAVE_)->getRow('
			SELECT `id_country`, `id_state`, `vat_number`, `postcode` FROM `'._DB_PREFIX_.'address`
			WHERE `id_address` = '.(int)$id_address);
        } else {
            $result = false;
        }
        self::$_idCountries[$id_address] = $result;
        return $result;
    }

    /**
    * Specify if an address is already in base
    *
    * @param int $id_address Address id
    * @return bool
    */
    public static function addressExists($id_address)
    {
        $key = 'address_exists_'.(int)$id_address;
        if (!Cache::isStored($key)) {
            $id_address = Db::getInstance(_PS_USE_SQL_SLAVE_)->getValue('SELECT `id_address` FROM '._DB_PREFIX_.'address a WHERE a.`id_address` = '.(int)$id_address);
            Cache::store($key, (bool)$id_address);
            return (bool)$id_address;
        }
        return Cache::retrieve($key);
    }

    public static function getFirstCustomerAddressId($id_customer, $active = true)
    {
        if (!$id_customer) {
            return false;
        }
        $cache_id = 'Address::getFirstCustomerAddressId_'.(int)$id_customer.'-'.(bool)$active;
        if (!Cache::isStored($cache_id)) {
            $result = (int)Db::getInstance(_PS_USE_SQL_SLAVE_)->getValue('
				SELECT `id_address`
				FROM `'._DB_PREFIX_.'address`
				WHERE `id_customer` = '.(int)$id_customer.' AND `deleted` = 0'.($active ? ' AND `active` = 1' : '')
            );
            Cache::store($cache_id, $result);
            return $result;
        }
        return Cache::retrieve($cache_id);
    }

    /**
     * Initiliaze an address corresponding to the specified id address or if empty to the
     * default shop configuration
     *
     * @param int $id_address
     * @param bool $with_geoloc
     * @return Address address
     *
     * @throws PrestaShopException
     */
    public static function initialize($id_address = null, $with_geoloc = false)
    {
        $context = Context::getContext();
        $exists = (int)$id_address && (bool)Address::addressExists($id_address);
        if ($exists) {
            $context_hash = (int)$id_address;
        } elseif ($with_geoloc && isset($context->customer->geoloc_id_country)) {
            $context_hash = md5((int)$context->customer->geoloc_id_country.'-'.(int)$context->customer->id_state.'-'.
                                $context->customer->postcode);
        } else {
            $context_hash = md5((int)$context->country->id);
        }


        $cache_id = 'Address::initialize_'.$context_hash;

        if (!Cache::isStored($cache_id)) {
            // if an id_address has been specified retrieve the address
            if ($exists) {
                $address = new Address((int)$id_address);

                if (!Validate::isLoadedObject($address)) {
                    throw new PrestaShopException('Invalid address #'.(int)$id_address);
                }
            } elseif ($with_geoloc && isset($context->customer->geoloc_id_country)) {
                $address             = new Address();
                $address->id_country = (int)$context->customer->geoloc_id_country;
                $address->id_state   = (int)$context->customer->id_state;
                $address->postcode   = $context->customer->postcode;
            } else {
                // set the default address
                $address             = new Address();
                $address->id_country = (int)$context->country->id;
                $address->id_state   = 0;
                $address->postcode   = 0;
            }
            Cache::store($cache_id, $address);
            return $address;
        }
        return Cache::retrieve($cache_id);
    }

    /**
     * Returns id_address for a given id_supplier
     * @since 1.5.0
     * @param int $id_supplier
     * @return int $id_address
     */
    public static function getAddressIdBySupplierId($id_supplier)
    {
        $query = new DbQuery();
        $query->select('id_address');
        $query->from('address');
        $query->where('id_supplier = '.(int)$id_supplier);
        $query->where('deleted = 0');
        $query->where('id_customer = 0');
        $query->where('id_manufacturer = 0');
        $query->where('id_warehouse = 0');
        return Db::getInstance(_PS_USE_SQL_SLAVE_)->getValue($query);
    }

    public static function aliasExist($alias, $id_address, $id_customer)
    {
        $query = new DbQuery();
        $query->select('count(*)');
        $query->from('address');
        $query->where('alias = \''.pSQL($alias).'\'');
        $query->where('id_address != '.(int)$id_address);
        $query->where('id_customer = '.(int)$id_customer);
        $query->where('deleted = 0');

        return Db::getInstance(_PS_USE_SQL_SLAVE_)->getValue($query);
    }

    public function getFieldsRequiredDB()
    {
        $this->cacheFieldsRequiredDatabase(false);
        if (isset(self::$fieldsRequiredDatabase['Address'])) {
            return self::$fieldsRequiredDatabase['Address'];
        }
        return array();
    }
}
